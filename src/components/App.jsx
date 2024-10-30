import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
// import { useId } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Title from './Title/Title';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import contactLists from './ContactList/contactLists.json';

export default function App() {
  const [contacts, setContact] = useState(() => {
    const savedContacts = window.localStorage.getItem('contacts');
    if (savedContacts !== null) {
      const contactList = JSON.parse(savedContacts);
      // const leng = contactList.contacts.length;
      return contactList.contacts;
    }

    return contactLists;
  });

  const [search, setSearch] = useState('');

  const hendleDelete = id => {
    console.log(id);
    setContact(prev => prev.filter(contacts => contacts.id !== id));
  };

  const handleSubmit = (values, actions) => {
    const newContact = { ...values, id: nanoid(4) };
    setContact(prev => [...prev, newContact]);
    actions.resetForm();
  };

  const handleChange = event => {
    setSearch(event.target.value);
  };

  const searchEngine = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify({ contacts }));
  }, [contacts]);
  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={handleSubmit} />
      <SearchBox handleChange={handleChange} value={search} />
      <ContactList contactLists={searchEngine} hendleDelete={hendleDelete} />
    </>
  );
}
