import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  h1: {
    color: "#fff",
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <>
      <div>Home page</div>
    </>
  );
}
