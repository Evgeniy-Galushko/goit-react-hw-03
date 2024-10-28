import { Formik, Form, Field } from 'formik';
import { ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';

export default function ContactForm({ onSubmit }) {
  const idName = useId();
  const idNumber = useId();

  const pattern = Yup.object().shape({
    name: Yup.string()
      .min(4, 'Too Short!')
      .max(25, 'Too Long!')
      .required('Required'),
    number: Yup.number('-').min(7, 'Too Short!').required('Required'),
  });

  const initialValues = {
    id: nanoid(4),
    name: '',
    number: '',
  };
  console.log(initialValues.id);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={pattern}
    >
      <Form className={s.form}>
        <div className={s.formDiv}>
          <label className={s.label} htmlFor={idName}>
            Name
          </label>
          <Field name="name" type="text" id={idName} className={s.field} />
          <ErrorMessage name="name" component="span" className={s.error} />
        </div>
        <div className={s.formDiv}>
          <label className={s.label} htmlFor={idNumber}>
            Number
          </label>
          <Field name="number" type="tel" id={idNumber} className={s.field} />
          <ErrorMessage name="number" component="span" className={s.error} />
        </div>
        <button type="submit" className={s.formButton}>
          Add contact{' '}
        </button>
      </Form>
    </Formik>
  );
}
