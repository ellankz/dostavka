import React from 'react';
import ContactForm from './ContactForm';
import ListCategories from './ListCategories';
import submitContactForm from '../api/submitForm';

const Footer = () => {
    return (
      <React.Fragment>
        <div className="ui vertical segment">
          <img src="/fish.svg" className="logo-footer" alt="Dostavka - вся доставка Кременчуга в одном месте" />
        </div>
        <div className="ui inverted vertical footer segment">
          <div className="ui container">
            <div className="ui stackable inverted divided equal height stackable grid">
              <div className="six wide column">
                <h4 className="ui inverted header">Категории</h4>
                <ListCategories position="footer"/>
              </div>
              <div className="seven wide column">
                <h4 className="ui inverted header">Связаться с нами</h4>
                <div className="ui mini inverted form">
                  <ContactForm onSubmit={submitContactForm} color="inverted"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>   
    );
}

export default Footer;