import Card from "../UI/Card";
import EmotionKey from "../components/EmotionKey";
import classes from "./AverageEmotions.module.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";

const AverageEmotions = (props) => {
  const [exportClicked, setExportClicked] = useState(false);

  const exportPdf = async () => {
    setExportClicked(true);
    const divToDisplay = await document.getElementById("pdfComponent");
    const quality = 5;

    var clientHeight = divToDisplay.clientHeight;
    var clientWidth = divToDisplay.clientWidth;

    html2canvas(divToDisplay, {
      scale: quality,
    }).then(function (canvas) {
      const divImage = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "px", [clientWidth, clientHeight]);
      // const imgProps = pdf.getImageProperties(divImage);
      // const pdfWidth = pdf.internal.pageSize.getWidth();
      // const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      var width = pdf.internal.pageSize.getWidth();
      var height = pdf.internal.pageSize.getHeight();
      pdf.addImage(divImage, "jpeg", 0, 0, width, height);
      pdf.save(`${props.title}-emotion-stats.pdf`);
    });
    setExportClicked(false);
  };

  // const exportPdf = () => {
  //   setExportClicked(true);
  //   const quality = 1; // Higher the better but larger file
  //   html2canvas(document.querySelector("#pdfComponent"), {
  //     scale: quality,
  //   }).then((canvas) => {
  //     const pdf = new jsPDF("p", "mm", "a4");
  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight = pdf.internal.pageSize.getHeight();
  //     pdf.addImage(
  //       canvas.toDataURL("image/png"),
  //       "PNG",
  //       0,
  //       0,
  //       pdfWidth,
  //       pdfHeight
  //     );
  //     pdf.save(`${props.title}-emotion-stats.pdf`);
  //   });
  //   setExportClicked(false);
  // };

  const neutralFaces = props.emotions.map((face) => {
    return face.neutral;
  });
  let neutraltotal = neutralFaces.reduce(function (s, v) {
    return s + (v || 0);
  }, 0);
  const avgNeutral = neutraltotal / neutralFaces.length;

  const confusedFaces = props.emotions.map((face) => {
    return face.confused;
  });
  let confusedTotal = confusedFaces.reduce(function (s, v) {
    return s + (v || 0);
  }, 0);
  const avgConfused = confusedTotal / confusedFaces.length;

  const happinessFaces = props.emotions.map((face) => {
    return face.happiness;
  });
  let happinessTotal = happinessFaces.reduce(function (s, v) {
    return s + (v || 0);
  }, 0);
  const avgHappiness = happinessTotal / happinessFaces.length;

  const contemptFaces = props.emotions.map((face) => {
    return face.contempt;
  });
  let contemptTotal = contemptFaces.reduce(function (s, v) {
    return s + (v || 0);
  }, 0);
  const avgContempt = contemptTotal / contemptFaces.length;

  const angerFaces = props.emotions.map((face) => {
    return face.anger;
  });
  let angerTotal = angerFaces.reduce(function (s, v) {
    return s + (v || 0);
  }, 0);
  const avgAnger = angerTotal / angerFaces.length;

  const fearFaces = props.emotions.map((face) => {
    return face.fear;
  });
  let fearTotal = fearFaces.reduce(function (s, v) {
    return s + (v || 0);
  }, 0);
  const avgFear = fearTotal / fearFaces.length;

  const disgustFaces = props.emotions.map((face) => {
    return face.disgust;
  });
  let disgustTotal = disgustFaces.reduce(function (s, v) {
    return s + (v || 0);
  }, 0);
  const avgDisgust = disgustTotal / disgustFaces.length;

  const sadnessFaces = props.emotions.map((face) => {
    return face.sadness;
  });
  let sadnessTotal = sadnessFaces.reduce(function (s, v) {
    return s + (v || 0);
  }, 0);
  const avgSadness = sadnessTotal / sadnessFaces.length;

  const surpriseFaces = props.emotions.map((face) => {
    return face.surprise;
  });
  let surpriseTotal = surpriseFaces.reduce(function (s, v) {
    return s + (v || 0);
  }, 0);
  const avgSurprise = surpriseTotal / surpriseFaces.length;

  let faceQty = 0;
  for (let i = 0; i < props.emotions.length; i++) {
    if (props.emotions[i]) faceQty++;
  }

  return (
    <section className={classes.generalData}>
      <EmotionKey />
      <div id="pdfComponent">
        <Card className={classes.card}>
          <div className={classes.titleFaces}>
            <h1>{`"${props.title}"`}</h1>
            <h2>Faces Detected</h2>
            <p>{faceQty}</p>
            <hr className={classes.line} />
          </div>
          <section className={classes.avgContainer}>
            <div>
              <h2 className={classes.avg}>Avg</h2>
            </div>
            <div className={classes.statContainer}>
              {avgNeutral > 0.01 && (
                <p
                  className={`${
                    avgNeutral >= 0.75
                      ? "green"
                      : avgNeutral >= 0.5
                      ? "yellow"
                      : avgNeutral >= 0.25
                      ? "orange"
                      : "red"
                  }`}
                >
                  Neutral:{Math.round(avgNeutral * 100)}%
                </p>
              )}
              {avgConfused > 0.01 && (
                <p
                  className={`${
                    avgConfused >= 0.75
                      ? "green"
                      : avgConfused >= 0.5
                      ? "yellow"
                      : avgConfused >= 0.25
                      ? "orange"
                      : "red"
                  }`}
                >
                  Confused:{Math.round(avgConfused * 100)}%
                </p>
              )}
              {avgHappiness > 0.01 && (
                <p
                  className={`${
                    avgHappiness >= 0.75
                      ? "green"
                      : avgHappiness >= 0.5
                      ? "yellow"
                      : avgHappiness >= 0.25
                      ? "orange"
                      : "red"
                  }`}
                >
                  Happy:{Math.round(avgHappiness * 100)}%
                </p>
              )}
              {avgContempt > 0.01 && (
                <p
                  className={`${
                    avgContempt >= 0.75
                      ? "green"
                      : avgContempt >= 0.5
                      ? "yellow"
                      : avgContempt >= 0.25
                      ? "orange"
                      : "red"
                  }`}
                >
                  Contempt:{Math.round(avgContempt * 100)}%
                </p>
              )}
              {avgAnger > 0.01 && (
                <p
                  className={`${
                    avgAnger >= 0.75
                      ? "green"
                      : avgAnger >= 0.5
                      ? "yellow"
                      : avgAnger >= 0.25
                      ? "orange"
                      : "red"
                  }`}
                >
                  Anger:{Math.round(avgAnger * 100)}%
                </p>
              )}
              {avgFear > 0.01 && (
                <p
                  className={`${
                    avgFear >= 0.75
                      ? "green"
                      : avgFear >= 0.5
                      ? "yellow"
                      : avgFear >= 0.25
                      ? "orange"
                      : "red"
                  }`}
                >
                  Fear:{Math.round(avgFear * 100)}%
                </p>
              )}
              {avgDisgust > 0.01 && (
                <p
                  className={`${
                    avgDisgust >= 0.75
                      ? "green"
                      : avgDisgust >= 0.5
                      ? "yellow"
                      : avgDisgust >= 0.25
                      ? "orange"
                      : "red"
                  }`}
                >
                  Disgust:{Math.round(avgDisgust * 100)}%
                </p>
              )}
              {avgSadness > 0.01 && (
                <p
                  className={`${
                    avgSadness >= 0.75
                      ? "green"
                      : avgSadness >= 0.5
                      ? "yellow"
                      : avgSadness >= 0.25
                      ? "orange"
                      : "red"
                  }`}
                >
                  Sadness:{Math.round(avgSadness * 100)}%
                </p>
              )}
              {avgSurprise > 0.01 && (
                <p
                  className={`${
                    avgSurprise >= 0.75
                      ? "green"
                      : avgSurprise >= 0.5
                      ? "yellow"
                      : avgSurprise >= 0.25
                      ? "orange"
                      : "red"
                  }`}
                >
                  {" "}
                  Surprised:{Math.round(avgSurprise * 100)}%
                </p>
              )}
            </div>
          </section>
          <div className={classes.notes}>
            <form>
              <textarea
                className={classes.textArea}
                rows="4"
                cols="10"
                defaultValue="notes..."
              />
            </form>

            {!exportClicked && (
              <button type="button" onClick={exportPdf}>
                Exports as pdf
              </button>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AverageEmotions;
