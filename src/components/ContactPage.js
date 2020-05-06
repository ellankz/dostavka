import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ContactForm from './ContactForm';
import submitContactForm from '../api/submitForm';

const ContactPage = (props) => {
    
    return (
        <React.Fragment>
            <Navigation />
            <div className="ui container content vertical segment stripe">
                <h1>Контакты</h1>
                <p>
                    Если вы хотите добавить, изменить или удалить информацию на сайте, а также если у вас есть какие-либо вопросы, пожалуйста, заполните форму ниже.
                </p>
                <div className="ui form">
                    <ContactForm onSubmit={submitContactForm} color="regular" />
                </div>
                
            </div>
            <Footer />
        </React.Fragment>
    ); 
}

export default ContactPage;