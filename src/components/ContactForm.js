import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { FROMSUBMITED } from "../constants/routes";

const validate = values => {
    const errors = {}
    if (!values.name) {
      errors.name = 'Необходимо заполнить это поле'
    }
    if (!values.email) {
      errors.email = 'Необходимо заполнить это поле'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Проветьте правильность вашего email адреса'
    }
    if (!values.message) {
      errors.message = 'Необходимо заполнить это поле'
    }
    return errors
  }
  

const renderInput = ({ input, label, type, name, meta: { touched, error, warning } }) => (
    <div className="field">
        <label htmlFor={name}>{label}</label>
        <input {...input} type={type} />
        {touched && ((error && <div className="ui error message"><p>{error}</p></div>))}
    </div>
);

const renderTextarea = ({ input, label, type, name, meta: { touched, error, warning } }) => (
    <div className="field">
        <label htmlFor={name}>{label}</label>
        <textarea {...input} type={type}></textarea>
        {touched && ((error && <div className="ui error message"><p>{error}</p></div>))}
    </div>
);


const ContactForm = (props) => {
    const { handleSubmit, submitting } = props;
    const [redirectToNewPage, setRedirectToNewPage] = useState(false);

    const handleContactFormSubmit = async () => {
        const submitResult = await handleSubmit();
        if (submitResult === true) {
            setRedirectToNewPage(true);
        } else {
            alert(submitResult);
        }
    }

    if (redirectToNewPage) {
        return (
        <Redirect to={FROMSUBMITED} />
        )
    }

    
    return (
        <form onSubmit={handleContactFormSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <div className="two fields">
                <Field name="name" component={renderInput} type="text" label="Имя" />
                <Field name="email" component={renderInput} type="email" label="Email" />
            </div>
            <Field name="message" component={renderTextarea} type="text" label="Сообщение" />
            <Field type="hidden" component="input" name="form-name" value="contact" />
            <button type="submit" disabled={submitting} className={props.color === "inverted" ? "ui submit inverted button" : "ui submit button"}>Отправить</button>
        </form>);
}


export default reduxForm({
    form: 'contact', validate
})(ContactForm);