import { Fragment } from "react";
import classes from "./Home.module.css";

import backgroundImage from "../../assets/images/room-reader-background-body.jpeg";
import TopSection from "./Top-Section";
import Mission from "./Mission";
import Description from "./Description";

const Home = () => {
  return (
    <Fragment>
      <main className={classes.homeBody}>
        <section className={classes.mainSection}>
          <div>
            <img
              className={classes.backgroundImage}
              src={backgroundImage}
              alt="Digital human silhouette"
            />
          </div>
          <TopSection />
        </section>
        <section className={classes.descriptionSection}>
          <Mission />
          <Description />
        </section>
      </main>
    </Fragment>
  );
};

export default Home;

// <button>
// <NavLink to="/emotion-detector">Emotion Detection</NavLink>
// </button>
