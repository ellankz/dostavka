import React from "react";
import "./AuthForm.css";

const PasswordForget = () => {
  return (
    <div className="ui auth-form">
      <div className="ui form">
        <h2 className="ui teal image header">
          <div className="content">Reset Password</div>
        </h2>
        <form className="ui large form">
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input type="text" name="email" placeholder="E-mail address" />
              </div>
            </div>
            <div className="ui fluid large teal submit button">
              Reset my password
            </div>
          </div>
          <div className="ui error message"></div>
        </form>
      </div>
    </div>
  );
};

export default PasswordForget;
