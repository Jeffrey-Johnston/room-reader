import React, { useRef, useState } from "react";
import { Fragment } from "react";
import logo from "../assets/images/rr-logo.png";
import classes from "./ImageForm.module.css";
import imageIcon from "../assets/images/image-icon.png";

const ImageForm = (props) => {
  const titleRef = useRef();
  const imageFileRef = useRef();
  const [imageFile, setImageFile] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [options, setOptions] = useState(true);
  const [fileOption, setFileOption] = useState(false);
  const [urlOption, setUrlOption] = useState(false);
  const [imageFileError, setImageFileError] = useState(false);

  const imageUrlHandler = (e) => {
    setImageUrl(e.target.value);
  };

  const imageFileHandler = async (e) => {
    console.log("This works!!!");
    setImageFile(e.target.files[0]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const imageTitle = titleRef.current.value;
    if (imageUrl !== "") {
      props.submitImage(imageUrl);
      props.setImage(imageUrl);
      props.setTitle(imageTitle);
    } else if (imageFile !== "") {
      const file = imageFile;
      const convertedFile = await convertToBase64(file);
      console.log(convertedFile);
      // const base64 = convertedFile.replace("data:image/png;base64,", "");
      const base64 = convertedFile.replace("data:image/jpeg;base64,", "");
      props.submitImage(base64);
      props.setImage(convertedFile);
      props.setTitle(imageTitle);
    } else if (imageFile.trim() === "") {
      setImageFileError(true);
    }
    setTimeout(() => {
      setImageFileError(false);
    }, 5000);
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

  const showUrlForm = () => {
    setUrlOption(true);
    setOptions(false);
  };
  const showFileForm = () => {
    setFileOption(true);
    setOptions(false);
  };

  const reset = () => {
    setOptions(true);
    setFileOption(false);
    setUrlOption(false);
  };

  return (
    <Fragment>
      <section className={classes.imageForm}>
        <img className={classes.logo} src={logo} alt="logo" />
        <h1>Emotion Detecotor</h1>
        {options && (
          <div className={classes.imageOptions}>
            <button className={classes.imageOption} onClick={showFileForm}>
              Choose A File From Your Library
            </button>
            <button className={classes.imageOption} onClick={showUrlForm}>
              Enter An Image Url Address
            </button>
          </div>
        )}
        <form className={classes.form} onSubmit={submitHandler}>
          {urlOption && (
            <input
              type="text"
              placeholder="Enter image title"
              ref={titleRef}
              required
            />
          )}
          {fileOption && (
            <input
              type="text"
              placeholder="Enter image title"
              ref={titleRef}
              required
            />
          )}
          {urlOption && (
            <div className={classes.urlInput}>
              <input
                type="text"
                placeholder="Enter image url"
                onChange={imageUrlHandler}
                ref={imageFileRef}
                required
              />
            </div>
          )}
          {/* <p className={classes.or}>or</p> */}
          {fileOption && (
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
              {imageFileError && (
                <p className={classes.fileError}>Please select an image</p>
              )}
              {imageFile !== "" && (
                <div>
                  <img
                    className={classes.imageIcon}
                    src={imageIcon}
                    alt="directions"
                  />
                  <p className={classes.fileSelected}>File Selected</p>
                </div>
              )}
            </div>
          )}

          {!options && (
            <div>
              <button type="submit">Detect Emotion</button>
              <p className={classes.reset} onClick={reset}>
                Go Back
              </p>
            </div>
          )}
        </form>
        <p className={classes.disclaimer}>
          RoomReader and Luxand do not store or share any of your images
        </p>
      </section>
    </Fragment>
  );
};

export default ImageForm;
