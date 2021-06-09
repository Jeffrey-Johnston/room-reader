import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import "./App.css";
import AverageEmotions from "./components/AvergaeEmotions";
import DetectedEmotions from "./components/DetectedEmotions";
import EmotionDetector from "./components/Emotion-Detector";

import Home from "./components/Home/Home";
import ImageForm from "./components/ImageForm";

function App() {
  const [emotions, setEmotions] = useState([]);
  const [image, setImage] = useState("");
  const [submitImage, setSubmitImage] = useState(true);
  const [title, setTitle] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const imageSubmissionHandler = async (fileInput) => {
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("token", "4adafbed17f04c11b601b71a0839c179");

    var formdata = new FormData();
    formdata.append("photo", fileInput);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    await fetch("https://api.luxand.cloud/photo/emotions", requestOptions)
      .then((response) => response.json())

      .then((responseData) => {
        let recognizedFaces = [];
        recognizedFaces = responseData.faces;
        const recognizedEmotions = recognizedFaces.map((recognizedFace) => {
          return {
            neutral: recognizedFace.emotions.neutral,
            confused: recognizedFace.emotions.confused,
            happiness: recognizedFace.emotions.happiness,
            contempt: recognizedFace.emotions.contempt,
            anger: recognizedFace.emotions.anger,
            fear: recognizedFace.emotions.fear,
            disgust: recognizedFace.emotions.disgust,
            sadness: recognizedFace.emotions.sadness,
            surprise: recognizedFace.emotions.surprise,
          };
        });
        setEmotions(recognizedEmotions);
        setIsLoading(false);
        setSubmitImage(false);
      })
      .catch((error) => console.log("error", error));
  };

  const setImageHandler = (imageData) => {
    let submittedImage = imageData.toString();

    setImage(submittedImage);
  };
  const setTitleHandler = (title) => {
    let imageTitle = title.toString();
    setTitle(imageTitle);
  };

  // const testHandler = (data) => {
  //   const img = data;
  //   console.log(img);
  //   imageSubmissionHandler(img);
  // };

  const refresh = () => {
    window.location.reload();
  };

  return (
    <div className="emotion-detector">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/emotion-detector">
          <EmotionDetector>
            {submitImage && (
              <ImageForm
                submitImage={imageSubmissionHandler}
                setImage={setImageHandler}
                setTitle={setTitleHandler}
              />
            )}
            {isLoading && (
              <div className="loading-container">
                <div className="lds-facebook">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                {/* <p className="loading">Anylizing Facial</p>
                <p className="loading"> Expressions</p> */}
              </div>
            )}
            {!submitImage && (
              <div className="resposne-data">
                <button onClick={refresh}>Refresh Page</button>
                <div>
                  <AverageEmotions emotions={emotions} title={title} />
                  <div className="image-container">
                    <img
                      className="submitted-image"
                      src={image}
                      alt="detected"
                    />
                  </div>
                  <DetectedEmotions emotions={emotions} />
                </div>
              </div>
            )}
          </EmotionDetector>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
