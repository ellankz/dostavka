import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./Navigation";
import HomePage from "./Home";
import AccountPage from "./Account";
import AdminPage from "./Admin";
import SignInPage from "./SignIn";
import SignUpPage from "./SignUp";
import PasswordForgetPage from "./PasswordForget";
import * as ROUTES from "../constants/routes";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navigation />
      <div className="ui container wrap">
        <Route path={ROUTES.HOME} exact component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      </div>
    </Router>
  );
};

export default App;
