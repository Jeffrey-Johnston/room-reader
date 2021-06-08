import React, { useRef } from "react";
import { Fragment } from "react";
import logo from "../assets/images/rr-logo.png";
import classes from "./ImageForm.module.css";

const ImageForm = (props) => {
  const imageUrlRef = useRef();
  // const [toBase64, setToBase64] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const imageData = imageUrlRef.current.value;

    props.submitImage(imageData);
    props.setImage(imageData);
  };
  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   const imageData = imageUrlRef.current.value;
  //   if (imageData !== "") {
  //     props.submitImage(imageData);
  //     props.setImage(imageData);
  //   }  else {
  //     const file = e.target.files[0];
  //     const base64 = await convertToBase64(file);
  //     console.log(base64);
  //     props.submitImage(base64);
  //     // setToBase64(base64);
  //   }
  // };

  // const convertToBase64 = (file) => {
  //   return new Promise((resolve) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);

  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };
  //   });
  // };

  return (
    <Fragment>
      <section className={classes.imageForm}>
        <img className={classes.logo} src={logo} alt="logo" />
        {/* <img src={toBase64} /> */}
        <form className={classes.form} onSubmit={submitHandler}>
          <input type="text" placeholder="Enter image title" required />
          <div className={classes.urlInput}>
            <input
              type="text"
              placeholder="Enter image url"
              ref={imageUrlRef}
            />
          </div>
          <p className={classes.or}>or</p>
          <div className={classes.fileInput}>
            <input
              className={classes.fInput}
              type="file"
              id="myFile"
              onChange={(e) => {
                submitHandler(e);
              }}
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
