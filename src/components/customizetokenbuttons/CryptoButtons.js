import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Icon1 from "../../assest/images/Iocn1.png";
import Icon2 from "../../assest/images/angalIcon.png";
import Icon3 from "../../assest/images/roundIcon.png";

const useStyles = makeStyles((theme) =>
  createStyles({
    RewardCard: {
      textAlign: "center",
    },
    Title: {
      alignItems: "center",
      color: theme.palette.common.white,
      fontFamily: "Roboto",
      textAlign: "center",
      margin: "0px",
    },
    RewardClaimed: {
      color: theme.palette.common.white,
      fontFamily: "Roboto",
      paddingLeft: "10px",
    },
    Na: {
      margin: "10px",
      color: theme.palette.common.white,
      fontFamily: "Roboto",
    },
    ClaimBtn: {
      margin: "5px",
      color: theme.palette.common.white,
      fontFamily: "Roboto",
      backgroundColor: "#D09A0A",
      padding: "5px 20px",
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
    tokenTextButton: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    itemIcon: {
      width: "20px",
      height: "20px",
    },
  })
);

export default function CryptoButtons({
  image,
  title,
  text1,
  text2,
  text3,
  btn,
}) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.RewardCard}>
        <h3 className={classes.Title}>{title}</h3>
      </div>
      <hr />
      <div className={classes.tokenTextButton}>
        <img className={classes.itemIcon} src={Icon1} alt="img" />
        <p className={classes.RewardClaimed}>{text1}</p>
      </div>
      <div className={classes.tokenTextButton}>
        <img className={classes.itemIcon} src={Icon2} alt="img" />
        <p className={classes.RewardClaimed}>{text2}</p>
      </div>
      <div className={classes.tokenTextButton}>
        <img className={classes.itemIcon} src={Icon3} alt="img" />
        <p className={classes.RewardClaimed}>{text3}</p>
      </div>
      <Button className={classes.ClaimBtn}>{btn}</Button>
    </div>
  );
}
