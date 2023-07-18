// import { Component } from 'react';
import PropTypes from 'prop-types';
import { IoPulse, IoKeypad, IoAlertCircleSharp } from 'react-icons/io5';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
// import Notiflix from 'notiflix';
import css from '../styles.module.css';


export function NewName(props) {

  // const ErrorText = styled.p`color: darkred`
    
  // const FormError = ({name}) => {
  //   return (
  //     <ErrorMessage
  //       name = {name}
  //       render = {message => <ErrorText>{message}</ErrorText>}
  //     />  
  //   );
  //   };  
  

  const initialValues = {
        name: '',
        number: '',
      }
      
  const handleSubmit = (values, {resetForm}) => {
        // console.log(actions);
        props.onSubmit({ ...values, id: nanoid() });
        resetForm();
      }

    const schema = Yup.object().shape({
      name: Yup.string()
        .required(<IoAlertCircleSharp className={css.error}/>),
      number: Yup.string()
        .required(<IoAlertCircleSharp className={css.error}/>),
    });    

  return (
      <Formik 
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema ={schema}
      >  

          <Form 
            className={css.formList}>

            <ErrorMessage name="name"/>  
            <label className={css.contactName} htmlFor="name">
              <span className={css.icon}>
                <IoPulse />
              </span>
              Name 
              <Field
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                autoComplete="off"
              />

            </label>

            <ErrorMessage name="number"/>
            <label className={css.contactNumber} htmlFor="number">
              <span className={css.icon}>
                <IoKeypad />
              </span>
              Number
              <Field
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                autoComplete="off"
              /> 
            </label>

            <button type="submit" className={css.contactButtonAdd}>
              Add new Contact
            </button>
          </Form>
      </Formik>  
    );
  }


Form.propTypes = {
  onSubmit: PropTypes.func,
};


