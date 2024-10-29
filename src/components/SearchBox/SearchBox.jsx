import s from './SearchBox.module.css';

export default function SearchBox({ handleChange, value }) {
  return (
    <div className={s.serchboxDiv}>
      <h2 className={s.serchboxTitle}>Find contacts by name</h2>
      <input
        className={s.serchboxInput}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
