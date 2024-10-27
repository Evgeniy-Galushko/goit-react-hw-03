import s from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList({ contactLists }) {
  return (
    <ul className={s.contactListUl}>
      {contactLists.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.contactListLi}>
            <Contact name={name} number={number} />
          </li>
        );
      })}
    </ul>
  );
}
