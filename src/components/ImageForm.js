import React, { useRef, useState } from "react";
import { Fragment } from "react";
import logo from "../assets/images/rr-logo.png";
import classes from "./ImageForm.module.css";

const ImageForm = (props) => {
  const titleRef = useRef();
  const [imageFile, setImageFile] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const imageUrlHandler = (e) => {
    setImageUrl(e.target.value);
  };

  const imageFileHandler = (e) => {
    setImageFile(e.target.files[0]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const imageTitle = titleRef.current.value;
    if (imageUrl !== "") {
      props.submitImage(imageUrl);
      props.setImage(imageUrl);
      props.setTitle(imageTitle);
    } else if (imageFile) {
      const file = imageFile;
      const convertedFile = await convertToBase64(file);
      // const base64 = convertedFile.replace("data:image/png;base64,", "");
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
              onChange={imageUrlHandler}
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
