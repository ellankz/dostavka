import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ServicePage from './ServicePage';
import ContactPage from './ContactPage';
import FormSubmittedPage from './FormSubmittedPage';
import * as ROUTES from "../constants/routes";
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="pusher">
          <Route path={ROUTES.HOME} exact component={HomePage} />
          <Route path={ROUTES.CATEGORY} exact component={HomePage} />
          <Route path={ROUTES.SERVICE} exact component={ServicePage} />
          <Route path={ROUTES.CONTACT} exact component={ContactPage} />
          <Route path={ROUTES.FORMSUBMITTED} exact component={FormSubmittedPage} />
        </div>
    </Router>
  );
};

export default App;

// TODO: Tidy app mobile version. Replace menu with slide-out sidebar for mobile.
// TODO: Find a way to show user that a page has been re-rendered. When changing categories it is often not obvious that something changed. Options: scroll to top, randomly mix service providers in list, show some loading animation for half a sec to imitate loading.