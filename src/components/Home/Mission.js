import classes from "./Mission.module.css";
import { Fragment } from "react";
import logo from "../../assets/images/rr-logo.png";

const Mission = () => {
  return (
    <Fragment>
      <section className={classes.mission}>
        <img className={classes.logo} src={logo} alt="logo" />
        <div>
          <h2 className={classes.h2}>Our mission</h2>
          <p>
            We aim to provide users with a resource to gain insight on a
            person's visual emotional response to a situation.
          </p>
        </div>
        <hr className={classes.line} />
        <div>
          <h2 className={classes.h2}>How does it work?</h2>
          <p>
            RoomerReader uses Luxand’s Face SDK framework and biometric
            identification technologies to detect emotional facial expressions.
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default Mission;
