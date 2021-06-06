import classes from "./Top-Section.module.css";
import Button from "../../UI/Button";

const TopSection = () => {
  return (
    <div className={classes.mainContent}>
      <p>
        Upload images and receive instant analysis of emotion facial
        expressions.
      </p>
      <p>
        Calculate emotional responses for focus groups, presentations and more…
      </p>
      <Button>Get Started</Button>
    </div>
  );
};

export default TopSection;
