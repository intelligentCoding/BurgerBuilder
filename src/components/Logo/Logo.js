import React from "react";
import burgerLogo from "../../assests/images/burger-logo.png";
import classes from "./logo.css";
const logo = props => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="Burger Builder Logo" />
  </div>
);

export default logo;
