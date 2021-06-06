import classes from "./DetectedEmotions.module.css";
import Card from "../UI/Card";

const DetectedEmotions = (props) => {
  return (
    <ul className={classes.list}>
      {props.emotions.map((face) => (
        <Card className={classes.card}>
          <li>
            <h2>Face Detected </h2>

            {face.neutral > 0.01 && (
              <p
                className={`${
                  face.neutral >= 0.75
                    ? "green"
                    : face.neutral >= 0.5
                    ? "yellow"
                    : face.neutral >= 0.25
                    ? "orange"
                    : "red"
                }`}
              >{`Neutral: ${Math.round(face.neutral * 100)}%`}</p>
            )}
            {face.confused > 0.01 && (
              <p
                className={`${
                  face.confused >= 0.75
                    ? "green"
                    : face.confused >= 0.5
                    ? "yellow"
                    : face.confused >= 0.25
                    ? "orange"
                    : "red"
                }`}
              >{`Confused: ${Math.round(face.confused * 100)}%`}</p>
            )}
            {face.happiness > 0.01 && (
              <p
                className={`${
                  face.happiness >= 0.75
                    ? "green"
                    : face.happiness >= 0.5
                    ? "yellow"
                    : face.happiness >= 0.25
                    ? "orange"
                    : "red"
                }`}
              >{`Happiness: ${Math.round(face.happiness * 100)}%`}</p>
            )}
            {face.contempt > 0.01 && (
              <p
                className={`${
                  face.contempt >= 0.75
                    ? "green"
                    : face.contempt >= 0.5
                    ? "yellow"
                    : face.contempt >= 0.25
                    ? "orange"
                    : "red"
                }`}
              >{`Contempt: ${Math.round(face.contempt * 100)}%`}</p>
            )}
            {face.anger > 0.01 && (
              <p
                className={`${
                  face.anger >= 0.75
                    ? "green"
                    : face.anger >= 0.5
                    ? "yellow"
                    : face.anger >= 0.25
                    ? "orange"
                    : "red"
                }`}
              >{`Anger: ${Math.round(face.anger * 100)}%`}</p>
            )}
            {face.fear > 0.01 && (
              <p
                className={`${
                  face.fear >= 0.75
                    ? "green"
                    : face.fear >= 0.5
                    ? "yellow"
                    : face.fear >= 0.25
                    ? "orange"
                    : "red"
                }`}
              >
                {" "}
                {`Fear: ${Math.round(face.fear * 100)}%`}
              </p>
            )}
            {face.disgust > 0.01 && (
              <p
                className={`${
                  face.disgust >= 0.75
                    ? "green"
                    : face.disgust >= 0.5
                    ? "yellow"
                    : face.disgust >= 0.25
                    ? "orange"
                    : "red"
                }`}
              >{`Disgust: ${Math.round(face.disgust * 100)}%`}</p>
            )}
            {face.sadness > 0.01 && (
              <p
                className={`${
                  face.sadness >= 0.75
                    ? "green"
                    : face.sadness >= 0.5
                    ? "yellow"
                    : face.sadness >= 0.25
                    ? "orange"
                    : "red"
                }`}
              >{`Sadness: ${Math.round(Math.round(face.sadness * 100))}%`}</p>
            )}
            {face.surprise > 0.01 && (
              <p
                className={`${
                  face.surprise >= 0.75
                    ? "green"
                    : face.surprise >= 0.5
                    ? "yellow"
                    : face.surprise >= 0.25
                    ? "orange"
                    : "red"
                }`}
              >
                {" "}
                {`Surprised: ${Math.round(face.surprise * 100)}%`}
              </p>
            )}
          </li>{" "}
        </Card>
      ))}
    </ul>
  );
};

export default DetectedEmotions;
