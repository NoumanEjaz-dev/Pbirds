import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import CommunityImage from "../../assest/images/JoinOurCommunity.png";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingTop: "20px",
      textAlign: "center",
    },
    paper: {
      padding: theme.spacing(2),
    },
    JoinCommunityTitle: {
      color: theme.palette.common.white,
      fontFamily: "Roboto",
    },
    JoinCommunityText: {
      fontFamily: "Roboto",
      fontSize: "12px",
      color: theme.palette.common.white,
      // margin: "9px",
    },
    JoinButton: {
      backgroundColor: "#2B2B2B",
      borderRadius: "10px",
      color: theme.palette.common.white,
      marginTop: "8px",
      width: "100%",
    },
  })
);

export default function JoinCard() {
  const classes = useStyles();

  return (
    <>
      <img className={classes.JoinImage} src={CommunityImage} alt="img" />
      <p className={classes.JoinCommunityTitle}>Join Our Community</p>
      <p className={classes.JoinCommunityText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <Button className={classes.JoinButton}>Join Now</Button>
    </>
  );
}
