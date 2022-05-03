import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const Image = ({ name, fullWidth }) => {
  const classes = useStyles();
  try {
    // Import image on demand
    const image = require(`assets/${name}`);

    // If the image doesn't exist. return null
    if (!image) return null;
    return (
      <img
        className={fullWidth ? classes.root : ""}
        src={image.default}
        alt={name}
      />
    );
  } catch (error) {
    console.log(`Image with name "${name}" does not exist`);
    return null;
  }
};

export default Image;
