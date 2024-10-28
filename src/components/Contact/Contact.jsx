import s from './Contact.module.css';

export default function Contact({ id, name, number, hendleDelete }) {
  return (
    <div className={s.divContact}>
      <ul className={s.ulContact}>
        <li>
          <p className={s.contactParagraph}>{name}</p>
        </li>
        <li>
          <p className={s.contactParagraph}>{number}</p>
        </li>
      </ul>
      <button
        className={s.contactButton}
        type="clicks"
        onClick={() => hendleDelete(id)}
      >
        Delete
      </button>
    </div>
  );
}
