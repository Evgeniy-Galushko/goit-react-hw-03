import { Formik, Form, Field } from 'formik';
import { ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import s from './ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
  const idName = useId();
  const idNumber = useId();

  const pattern = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.number()
      .min(3, 'Too Short!')
      // .max(50, 'Too Long!')
      .required('Required'),
  });

  const initialValues = {
    name: '',
    number: '',
  };
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
