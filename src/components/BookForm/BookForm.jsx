import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId, useState } from 'react';
import * as Yup from 'yup';
import css from './BookForm.module.css';
import toast, { Toaster } from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short! Min 3 items')
    .max(50, 'Too Long! Max 50 items')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  date: Yup.date().required('Required'),
  name: Yup.string().max(100, 'Too Long! Max 100 items'),
});

export default function BookForm() {
  const fieldId = useId();
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = values => {
    const formData = { ...values, date: selectedDate };

    dispatch(yourBookingAction(formData))
      .unwrap()
      .then(() => {
        actions.resetForm();
        setSelectedDate(null);
        toast.success('Order successfully added!', {
          icon: '👏',
        });
      })
      .catch(() => {
        toast.error('Failed to add order!');
      });
  };

  return (
    <div className={css.container}>
      <h1 className={css.textHeader}>Book your campervan now</h1>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={{ name: '', email: '', date: '', comment: '' }}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        {({ setFieldValue }) => (
          <Form className={css.form}>
            <Field
              className={css.input}
              type="text"
              name="name"
              id={`${fieldId}-name`}
              placeholder="Name*"
            />
            <ErrorMessage className={css.error} name="name" component="span" />

            <Field
              className={css.input}
              type="text"
              name="email"
              id={`${fieldId}-email`}
              placeholder="Email*"
            />
            <ErrorMessage className={css.error} name="email" component="span" />
            <DatePicker
              selected={selectedDate}
              onChange={date => {
                setSelectedDate(date);
                setFieldValue('date', date); // Встановлення значення у Formik
              }}
              dateFormat="dd/MM/yyyy"
              className={css.input} // Додайте стиль
              placeholderText="Date*"
              isClearable={false}
            />

            <ErrorMessage className={css.error} name="date" component="span" />

            <Field
              className={css.inputComment}
              type="text"
              name="comment"
              id={`${fieldId}-comment`}
              placeholder="Comment"
            />
            <ErrorMessage
              className={css.error}
              name="comment"
              component="span"
            />

            <button className={css.button} type="submit">
              Send
            </button>
            <Toaster position="top-center" />
          </Form>
        )}
      </Formik>
    </div>
  );
}
