import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ContactForm = (props) => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <div className="two fields">
                <div className="field">
                    <label htmlFor="name">Имя</label>
                    <Field name="name" component="input" type="text" />
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <Field name="email" component="input" type="email" />
                </div>
            </div>
            <div className="field">
                <label htmlFor="message">Сообщение</label>
                <Field name="message" component="textarea" type="text" />
            </div>
            <Field type="hidden" component="input" name="form-name" value="contact" />
            <button type="submit" className={props.color === "inverted" ? "ui submit inverted button" : "ui submit button"}>Отправить</button>
        </form>);
}


export default reduxForm({
    form: 'contact'
})(ContactForm);