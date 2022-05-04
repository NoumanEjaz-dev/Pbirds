import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwitchButton from "../switchbutton/SwitchButton";
import Button from "@material-ui/core/Button";
import ExchangeInput from "./exchangeInput";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
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

  const [fromCoin, setFromCoin] = useState({ name: "Max BNB", value: 0 });
  const [toCoin, setToCoin] = useState({ name: "PBIRD", value: 0 });

  const onChangeHandler = (event) => {
    console.log(event.target.name,toCoin.name)
    if(event.target.name=== fromCoin.name){
      setFromCoin({
        ...fromCoin,
        value: event.target.value,
      });
      return;
    }
    if (event.target.name === toCoin.name) {
      setToCoin({
        ...toCoin,
        value: event.target.value,
      });
      return;
    }
  };

  const switchHandler = () => {
    setFromCoin(toCoin);
    setToCoin(fromCoin);
  };
  return (
    <>
      <br />
      <form className={classes.root} noValidate autoComplete="off">
        <ExchangeInput
          from={"From"}
          balance={"10"}
          coinName={fromCoin.name}
          onchange={onChangeHandler}
          value={fromCoin.value}
        />

        <SwitchButton onclick={switchHandler} />
        <ExchangeInput
          from={"To(estimated)"}
          balance={"10"}
          coinName={toCoin.name}
          onchange={onChangeHandler}
          value={toCoin.value}
        />
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
