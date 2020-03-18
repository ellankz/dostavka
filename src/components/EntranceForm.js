import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import "./AuthForm.css";

const EntranceForm = props => {
  const renderPWForgetLink = () => {
    return (
      <Link to={ROUTES.PASSWORD_FORGET} className="pw-forget">
        Forgot password?
      </Link>
    );
  };
  const renderSigUpLink = () => {
    return (
      <div className="ui message">
        New to us? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      </div>
    );
  };
  return (
    <div className="ui auth-form">
      <div className="ui form">
        <h2 className="ui teal image header">
          <div className="content">
            {props.action === "SignIn"
              ? "Log-in to your account"
              : "Create new account"}
          </div>
        </h2>
        <form className="ui large form">
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input type="text" name="email" placeholder="E-mail address" />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input type="password" name="password" placeholder="Password" />
              </div>
            </div>
            <div className="ui fluid large teal submit button">Login</div>
            {props.action === "SignIn" ? renderPWForgetLink() : null}
          </div>
          <div className="ui error message"></div>
        </form>
        {props.action === "SignIn" ? renderSigUpLink() : null}
      </div>
    </div>
  );
};

export default EntranceForm;
