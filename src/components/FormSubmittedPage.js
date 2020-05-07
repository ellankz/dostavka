import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const FormSubmitedPage = () => {
    return (
        <React.Fragment>
          <Navigation />
          <div className="ui container content vertical segment stripe">
                <h1>Спасибо</h1>
                <p>
                    Мы получили ваше сообщение и в скором времени свяжемся с вами.
                </p>
            </div>
          <Footer />
        </React.Fragment>
      );
}

export default FormSubmitedPage;