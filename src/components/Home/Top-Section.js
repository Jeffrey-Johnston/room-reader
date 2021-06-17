import classes from "./Top-Section.module.css";

import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Mission from "../Home/Mission";

const TopSection = () => {
  const history = useHistory();

  const startButtonHandler = () => {
    history.push("/emotion-detector");
  };

  return (
    <Fragment>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={logo} alt="logo" />
      </div>

      <div className={classes.mainContent}>
        <p>
          Upload images and receive instant analysis of emotion facial
          expressions.
        </p>
        <p>
          Calculate emotional responses for focus groups, presentations and
          more…
        </p>
        <div className={classes.hover}>
          <button className={classes.button} onClick={startButtonHandler}>
            Get Started
          </button>
        </div>
      </div>
      <div>
        <Mission />
      </div>
    </Fragment>
  );
};

export default TopSection;
