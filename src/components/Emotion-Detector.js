import { Fragment } from "react";
import classes from "./Emotion-Detector.module.css";
import backgroundImage from "../assets/images/room-reader-background-body.jpeg";
import logo from "../assets/images/logo.png";
import { useHistory } from "react-router-dom";

const EmotionDetector = (props) => {
  const history = useHistory();

  const homeRouteHandler = () => {
    history.push("/home");
  };

  return (
    <Fragment>
      <div className={classes.background}>
        <img
          className={classes.backgroundImage}
          src={backgroundImage}
          alt="Digital silhouette of a person"
        />
      </div>
      <div className={classes.logoContainer}>
        <img
          className={classes.logo}
          src={logo}
          alt="logo"
          onClick={homeRouteHandler}
        />
      </div>

      <main className={classes.body}>{props.children}</main>
    </Fragment>
  );
};
export default EmotionDetector;
