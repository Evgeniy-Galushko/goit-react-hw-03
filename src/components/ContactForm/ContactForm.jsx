import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const idUsername = useId();
  const idPhone = useId();

  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form className={s.form}>
        <div className={s.formDiv}>
          <label className={s.label} htmlFor={idUsername}>
            Name
          </label>
          <Field
            name="username"
            type="text"
            id={idUsername}
            className={s.field}
          />
        </div>
        <div className={s.formDiv}>
          <label className={s.label} htmlFor={idPhone}>
            Number
          </label>
          <Field
            name="phone"
            type="tel"
            min="7"
            max="16"
            id={idPhone}
            className={s.field}
          />
          <button type="submit" className={s.formButton}>
            Add contact{' '}
          </button>
        </div>
      </Form>
    </Formik>
  );
}
