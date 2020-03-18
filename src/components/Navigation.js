import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";

const Navigation = () => {
  return (
    <div className="ui secondary fixed pointing menu">
      <div className="ui container">
        <Link to={ROUTES.HOME} className="active item">
          Home
        </Link>
        <Link to={ROUTES.ACCOUNT} className="item">
          Account
        </Link>
        <Link to={ROUTES.ADMIN} className="item">
          Admin
        </Link>
        <div className="right menu">
          <Link to={ROUTES.SIGN_IN} className="ui item">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
