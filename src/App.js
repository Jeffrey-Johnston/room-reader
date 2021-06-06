import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import AverageEmotions from "./components/AvergaeEmotions";
import DetectedEmotions from "./components/DetectedEmotions";
import Home from "./components/Home/Home";
import ImageForm from "./components/ImageForm";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  const [emotions, setEmotions] = useState([]);
  const [image, setImage] = useState("");
  const [submitImage, setSubmitImage] = useState(true);
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

  // const testHandler = (data) => {
  //   const img = data;
  //   console.log(img);
  //   imageSubmissionHandler(img);
  // };

  return (
    <div className="emotion-detector">
      <MainNavigation />
      <Switch>
        <Route path="/">
          <Home />
        </Route>

        <Route path="/emotion-detector">
          <section>
            {submitImage && (
              <ImageForm
                submitImage={imageSubmissionHandler}
                setImage={setImageHandler}
              />
            )}
            {isLoading && (
              <div className="loading-container">
                <div class="lds-facebook">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <p className="loading">Anylizing Facial Expressions</p>
              </div>
            )}
            {!submitImage && (
              <div className="resposne-data">
                <div>
                  <AverageEmotions emotions={emotions} />
                  <DetectedEmotions emotions={emotions} />
                </div>
                <div className="image-container">
                  <img className="submitted-image" src={image} alt="detected" />
                </div>
              </div>
            )}
          </section>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
