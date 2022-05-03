import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwitchButton from "../switchbutton/SwitchButton";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  inputFiledBox: {
    color: "#fff",
    background: "#000",
    display: "grid",
    padding: "10px 20px 0px 20px",
    fontFamily: "Roboto",
    // width: "100%",
    borderRadius: "5px",
    border: "1px solid #fff",
    textAlign: "center",
  },
  inpbox: {
    outline: "none",
    background: "#000",
    border: "none",
    padding: "10px",
    color: "#fff",
    fontFamily: "Roboto",
    flex: "1",
  },
  inputDetail: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  inputText: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  text: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    color: theme.palette.common.white,
    fontFamily: "Roboto",
    paddingTop: "10px",
  },
  saveBtn: {
    marginTop: "15px",
    padding: "10px 45px",
    background: theme.palette.common.yellow,
    color: "#fff",
    textAlign: "center",
    "&:hover": {
      background: theme.palette.common.yellow,
    },
  },
}));

export default function InputFields() {
  const classes = useStyles();

  return (
    <>
      <br />
      <form className={classes.root} noValidate autoComplete="off">
        <div className={classes.inputFiledBox}>
          <span className={classes.inputDetail}>
            {" "}
            <label>From</label>
            <label>Balance: 10</label>
          </span>
          <span className={classes.inputText}>
            {" "}
            <input className={classes.inpbox} />
            <label>Max BNB</label>
          </span>
        </div>
        <SwitchButton />
        <div className={classes.inputFiledBox}>
          <span className={classes.inputDetail}>
            {" "}
            <label>To(estimated)</label>
            <label>Balance: 0</label>
          </span>
          <span className={classes.inputText}>
            {" "}
            <input className={classes.inpbox} />
            <label>PBIRD</label>
          </span>
        </div>
        <span className={classes.text}>
          {" "}
          <label>Price </label>
          <label>32000000000 PBIRD per BNB</label>
        </span>
        <span className={classes.text}>
          {" "}
          <label>Slippage Tolerance </label>
          <label>1%</label>
        </span>
        <Button className={classes.saveBtn}>Swap</Button>
      </form>
    </>
  );
}
