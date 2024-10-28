import { useState, useEffect } from 'react';
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
      //   const contactList = JSON.parse(savedContacts);
      //   // console.log(contactList.submits);
      //   return contactList.submits;
    }
    return contactLists;
  });

  // console.log(submits);

  const hendleDelete = id => {
    console.log(id);
    setContact(prev => prev.filter(contacts => contacts.id !== id));
  };

  const handleSubmit = (values, actions) => {
    setContact(prev => [...prev, values]);
    actions.resetForm();
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify({ contacts }));
  }, [contacts]);
  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={handleSubmit} />
      <SearchBox />
      <ContactList contactLists={contacts} hendleDelete={hendleDelete} />
    </>
  );
}
