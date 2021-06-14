import React, { useRef, useState } from "react";
import { Fragment } from "react";
import logo from "../assets/images/rr-logo.png";
import classes from "./ImageForm.module.css";

const ImageForm = (props) => {
  const imageUrlRef = useRef();
  const titleRef = useRef();
  const [imageFile, setImageFile] = useState("");

  const imageFileHandler = (e) => {
    setImageFile(e.target.files[0]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const imageData = imageUrlRef.current.value;
    const imageTitle = titleRef.current.value;
    if (imageData !== "") {
      props.submitImage(imageData);
      props.setImage(imageData);
      props.setTitle(imageTitle);
    } else {
      const file = imageFile;
      const convertedFile = await convertToBase64(file);
      const base64 = convertedFile.replace("data:image/jpeg;base64,", "");
      props.submitImage(base64);
      props.setImage(convertedFile);
      props.setTitle(imageTitle);
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
    });
  };

  return (
    <Fragment>
      <section className={classes.imageForm}>
        <img className={classes.logo} src={logo} alt="logo" />
        <h1>Emotion Detecotor</h1>
        <form className={classes.form} onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter image title"
            ref={titleRef}
            required
          />
          <div className={classes.urlInput}>
            <input
              type="text"
              placeholder="Enter image url"
              ref={imageUrlRef}
            />
          </div>
          <p className={classes.or}>or</p>
          <div className={classes.fileInput}>
            <label className={classes.customFileUpload} htmlFor="myFile">
              Choose Image
            </label>
            <input
              className={classes.fInput}
              type="file"
              id="myFile"
              onChange={imageFileHandler}
              // onChange={(e) => {
              //   submitHandler(e);
              // }}
            />
          </div>
          <div>
            <button type="submit">Detect Emotion</button>
          </div>
        </form>
      </section>
    </Fragment>
  );
};

export default ImageForm;
