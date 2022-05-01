import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    RewardCard: {
      display: "flex",
      justifyContent: "space-between",
      textAlign: "center",
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

export default function CardToken({
  image,
  title,
  text1,
  text2,
  text3,
  text4,
  btn,
}) {
  const classes = useStyles();

  return (
    <>
      <div>
        <div className={classes.RewardCard}>
          <img src={image} alt="img" />
          <h3 className={classes.Title}>{title}</h3>
        </div>
        <hr />
        <p className={classes.RewardClaimed}>{text1}</p>
        <p className={classes.Na}>{text2}</p>
        <Button className={classes.ClaimBtn}>{btn}</Button>
        <p className={classes.TotalEarned}>{text3}</p>
        <p className={classes.Na}>N/A</p>
        <p className={classes.TotalDistributed}>{text4}</p>
      </div>
    </>
  );
}
