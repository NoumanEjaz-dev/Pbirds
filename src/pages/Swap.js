import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  h1: {
    color: "#fff",
  },
}));
export default function Swap() {
  const classes = useStyles();

  return (
    <>
      <h1 className={classes.h1}>Swap page</h1>
    </>
  );
}
