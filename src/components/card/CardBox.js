import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box, makeStyles, Paper, Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    background: theme.palette.common.lightDark,
    borderRadius: "5px",
    "& .MuiCardContent-root": {
      padding: "16px !important",
    },
  },
  boldTitle: {
    borderBottom: "2px solid #D09A0A",
    color: theme.palette.common.white,
    paddingBottom: "5px",
    textAlign: "start",
  },
  boldTitle2: {
    borderBottom: "2px solid #D09A0A",
    color: theme.palette.common.white,
    paddingBottom: "5px",
    textAlign: "start",
  },
  paperBox: {
    display: "flex",
    flexWrap: "wrap",
    paddingTop: "10px",
    justifyContent: "space-between",
    "& > *": {
      // margin: theme.spacing(1),
      // width: theme.spacing(14.9),
      justifyContent: "space-between !important",
      flexBasis: "46%",
      height: theme.spacing(14.9),
    },
  },
  paperBlock: {
    border: "2px solid #D09A0A",
    background: theme.palette.common.lightDark,
  },
  Marketdetails: {
    textAlign: "center",
    marginTop: "30px",
    color: theme.palette.common.white,
    fontFamily: "roboto",
    "& p": {
      color: theme.palette.common.gray,
    },
  },
  TotalBalance: {
    fontSize: "12px",
    color: theme.palette.common.gray,
    margin: "5px 0px !important",
  },
}));

const CardBox = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.titleText}>
          <Typography className={classes.boldTitle} variant="h6">
            <b>Wallet Address</b>
          </Typography>
          <Typography className={classes.boldTitle2} variant="h6">
            <p className={classes.TotalBalance}>Total Balance</p>
            <b>$4,53,5643</b>
          </Typography>
        </div>
        <Box>
          <div className={classes.paperBox}>
            <Paper className={classes.paperBlock}>
              <div className={classes.Marketdetails}>
                <p>Market Cap</p>
                <b>2,53,543</b>
              </div>
            </Paper>
            <Paper className={classes.paperBlock}>
              <div className={classes.Marketdetails}>
                <p>Current Price</p>
                <b>2,53,543</b>
              </div>
            </Paper>
          </div>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardBox;
