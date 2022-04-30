import { makeStyles, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Box, Button } from "@material-ui/core";
import ChartGraph from "../components/charts/ChartGraph";
import CardBox from "../components/card/CardBox";
import MainCard from "../components/box/MainCard";
import CommunityImage from "../assest/images/JoinOurCommunity.png";
import profile from "../assest/images/profile.png";
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
      marginTop: "10px",
      width: "100%",
    },
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

const RewardPage = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6} spacing={3}>
            <ChartGraph />
          </Grid>
          <Grid item xs={12} sm={6} lg={3} spacing={3}>
            <CardBox />
          </Grid>
          <Grid item xs={12} sm={6} lg={3} spacing={3}>
            <MainCard>
              <img
                className={classes.JoinImage}
                src={CommunityImage}
                alt="img"
              />
              <p className={classes.JoinCommunityTitle}>Join Our Community</p>
              <p className={classes.JoinCommunityText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Button className={classes.JoinButton}>Join Now</Button>
            </MainCard>
          </Grid>
        </Grid>
        {/*  */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} lg={3} spacing={3}>
            <MainCard>
              <div>
                <div className={classes.RewardCard}>
                  <img src={profile} alt="img" />
                  <h3 className={classes.Title}>WBNB</h3>
                </div>
                <hr />
                <p className={classes.RewardClaimed}>Reward Not Claimed</p>
                <p className={classes.Na}>N/A</p>
                <Button className={classes.ClaimBtn}>Claim Manually</Button>
                <p className={classes.TotalEarned}>Total Earned (WBNB)</p>
                <p className={classes.Na}>N/A</p>
                <p className={classes.TotalDistributed}>
                  Total (WBNB) Distributed
                </p>
              </div>
            </MainCard>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default RewardPage;
