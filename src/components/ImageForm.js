import React, { useRef } from "react";
import Card from "../UI/Card";
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
    <Card className={classes.card}>
      {/* <img src={toBase64} /> */}
      <form className={classes.form} onSubmit={submitHandler}>
        {/* <div>
          <label htmlFor="myFile">Import File</label>
          <input
            type="file"
            id="myFile"
            onChange={(e) => {
              submitHandler(e);
            }}
          />
        </div> */}
        <div>
          <label htmlFor="imgUrl">Import Image Url</label>
          <input type="text" id="imgUrl" name="imgUrl" ref={imageUrlRef} />
        </div>
        <div>
          <button type="submit">Detect Emotion</button>
        </div>
      </form>
    </Card>
  );
};

export default ImageForm;
