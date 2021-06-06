import classes from "./Top-Section.module.css";

import { Fragment } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/images/logo.png";

const TopSection = () => {
  return (
    <Fragment>
      <nav>
        <div className={classes.logoContainer}>
          <NavLink to="/s">
            <img className={classes.logo} src={logo} alt="logo" />
          </NavLink>
        </div>
      </nav>

      <div className={classes.mainContent}>
        <p>
          Upload images and receive instant analysis of emotion facial
          expressions.
        </p>
        <p>
          Calculate emotional responses for focus groups, presentations and
          more…
        </p>
        <button className={classes.button}>Get Started</button>
      </div>
    </Fragment>
  );
};

export default TopSection;
