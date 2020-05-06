import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import NavCategories from "./NavCategories";

const Navigation = () => {
  return (
    <div className="ui inverted menu">
      <div className="ui container">
        <Link to={ROUTES.HOME} className="header item">
          <img src="/fish-white.svg" className="logo-main" alt="Dostavka - вся доставка Кременчуга в одном месте" />
        </Link>
        <NavCategories />
        {/* <Link className="item">Контакты</Link> */}
        <div className="right menu">
          <Link to={ROUTES.CONTACT} className="item">Контакты</Link>
        </div>
      </div>
    </div> 
  );
};

export default Navigation;