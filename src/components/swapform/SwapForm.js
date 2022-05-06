import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Setting from "../setting/Setting";
import InputFields from "../inputfileds/InputFields";
import Grid from "@material-ui/core/Grid";
import MainCard from "../box/MainCard";

const useStyles = makeStyles((theme) =>
  createStyles({
    SwapFormContainer: {
      background: "#111111",
      borderRadius: "10px",
      padding: "30px",
    },
    FormHeaderContianer: {
      width: "100% !important",
      display: "flex",
      justifyContent: "space-between",
      color: theme.palette.common.white,
      fontFamily: "Roboto",
    },
    ExchangeTitle: {
      margin: "0px",
    },
    tagLine: {
      color: theme.palette.common.yellow,
    },
    Info: {
      marginTop: "20px",
      marginBottom: "20px",
    },
    text: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      color: theme.palette.common.white,
      fontFamily: "Roboto",
      paddingTop: "10px",
    },
  })
);

export default function SwapForm() {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} lg={3} spacing={3}></Grid>
        <Grid item xs={12} lg={6}>
          <div className={classes.SwapFormContainer}>
            <div className={classes.FormHeaderContianer}>
              <div className={classes.headingTitle}>
                <h3 className={classes.ExchangeTitle}>Exchange</h3>
                <span className={classes.tagLine}>
                  Trade Tokens in an instant
                </span>
              </div>
              <div className={classes.setttingButton}>
                <Setting />
              </div>
            </div>
            <hr />
            <InputFields />
          </div>
        </Grid>
      </Grid>
      <div className={classes.Info}>
        <Grid container>
          <Grid item xs={12} lg={3} spacing={3}></Grid>
          <Grid item xs={12} lg={6}>
            <MainCard>
              <span className={classes.text}>
                {" "}
                <label>Minimum received </label>
                <label>1.2844 PBIRD</label>
              </span>
              <span className={classes.text}>
                {" "}
                <label>Price Impact </label>
                <label style={{ color: "#D09A0A" }}> 0.01%</label>
              </span>
              <span className={classes.text}>
                {" "}
                <label>Liquidity Proivder Fee </label>
                <label>0.012 BNB</label>
              </span>
            </MainCard>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
