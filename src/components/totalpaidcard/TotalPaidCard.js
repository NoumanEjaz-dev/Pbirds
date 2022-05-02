import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import shapecircle from "../../assest/images/shape.png";

const useStyles = makeStyles((theme) =>
  createStyles({
    CircleIcon: {
      padding: "30px 0px",
    },
    Title: {
      display: "flex",
      alignItems: "center",
      color: theme.palette.common.white,
      fontFamily: "Roboto",
    },
    RewardClaimed: {
      color: theme.palette.common.white,
      fontFamily: "Roboto",
      position: "relative",
      top: "135px",
    },
    RewardClaimed2: {
      color: theme.palette.common.white,
      fontFamily: "Roboto",
      position: "relative",
      top: "140px",
    },
    RewardClaimed3: {
      color: theme.palette.common.white,
      fontFamily: "Roboto",
      position: "relative",
      top: "145px",
    },
    Na: {
      margin: "10px",
      color: theme.palette.common.white,
      fontFamily: "Roboto",
    },
    ClaimBtn: {
      margin: "10px",
      color: theme.palette.common.white,
      fontFamily: "Roboto",
      backgroundColor: "#D09A0A",
      padding: "10px",
      "&:hover": {
        backgroundColor: "#D09A0A",
      },
    },
    TotalEarned: {
      margin: "10px",
      color: theme.palette.common.white,
      fontFamily: "Roboto",
    },
    TotalDistributed: {
      margin: "10px",
      color: theme.palette.common.white,
      fontFamily: "Roboto",
    },
  })
);
export default function TotalPaidCard({ text1, text2, text3 }) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.CircleIcon}>
        <span className={classes.RewardClaimed}>{text1}</span>
        <br />
        <span className={classes.RewardClaimed2}>{text2}</span>
        <br />
        <span className={classes.RewardClaimed3}>{text3}</span>
        <br />
        <img src={shapecircle} alt="img" />
      </div>
    </div>
  );
}
