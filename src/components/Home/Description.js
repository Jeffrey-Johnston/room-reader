import { Fragment } from "react";
import classes from "./Description.module.css";
import uploadIcon from "../../assets/images/icons8-upload-64.png";
import dataIcon from "../../assets/images/data-icon.png";
import imageIcon from "../../assets/images/image-icon.png";

const Description = () => {
  return (
    <Fragment>
      <section className={classes.description}>
        <div>
          <h2>Step One</h2>
          <p>
            Upload a pdf file, jpg file or image URL address, and give your
            image a title
          </p>
          <img
            className={classes.uploadIcon}
            src={uploadIcon}
            alt="directions"
          />
        </div>
        <div>
          <h2>Step Two</h2>
          <p>
            Receive your image analysis, inspect data, and add personal notes
          </p>
          <img className={classes.dataIcon} src={dataIcon} alt="directions" />
        </div>
        <div>
          <h2>Step Three</h2>
          <p>
            Export your emotion statistics and notes to store for future
            reference
          </p>
          <img className={classes.imageIcon} src={imageIcon} alt="directions" />
        </div>
        <span className={classes.disclaimer}>
          RoomReader and Luxand do not store or share any of your images
        </span>
      </section>
    </Fragment>
  );
};

export default Description;
