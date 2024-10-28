import s from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList({ contactLists, hendleDelete }) {
  return (
    <ul className={s.contactListUl}>
      {contactLists.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.contactListLi}>
            <Contact
              id={id}
              name={name}
              number={number}
              hendleDelete={hendleDelete}
            />
          </li>
        );
      })}
    </ul>
  );
}
