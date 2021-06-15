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
  const [error, setError] = useState(false);

  const imageSubmissionHandler = async (fileInput) => {
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("token", process.env.REACT_APP_GOOGLE_API_KEY);

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
        console.log(recognizedFaces);
        if (recognizedFaces === undefined) {
          setError(true);
          setIsLoading(false);
        } else {
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
          setError(false);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const setImageHandler = (imageData) => {
    let submittedImage = imageData.toString();

    setImage(submittedImage);
  };
  const setTitleHandler = (title) => {
    let imageTitle = title.toString();
    console.log(imageTitle);
    setTitle(imageTitle);
  };

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
            {error && (
              <div className="error">
                <p>Invalid image format</p>
                <p>Please use a valid url address, pdf file, or jpg file.</p>
              </div>
            )}
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
                <p className="loading">Anylizing Facial</p>
                <p className="loading"> Expressions</p>
              </div>
            )}
            {!submitImage && (
              <div>
                <div className="resposne-data">
                  <button className="newImageMobile" onClick={refresh}>
                    Scan New Image
                  </button>
                  <div className="avgAndImage">
                    <AverageEmotions emotions={emotions} title={title} />
                    <div className="image-container">
                      <button className="newImageDesktop" onClick={refresh}>
                        Scan New Image
                      </button>
                      <img
                        className="submitted-image"
                        src={image}
                        alt="detected"
                      />
                    </div>
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
