import classes from "./EmotionKey.module.css";

const EmotionKey = () => {
  return (
    <section className={classes.key}>
      <p>0%</p>
      <div className={`${classes.bar} ${classes.red}`}></div>
      <div className={`${classes.bar} ${classes.orange}`}></div>
      <div className={`${classes.bar} ${classes.yellow}`}></div>
      <div className={`${classes.bar} ${classes.green}`}></div>
      <p>100%</p>
    </section>
  );
};

export default EmotionKey;
