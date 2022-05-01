import { makeStyles, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ChartGraph from "../components/charts/ChartGraph";
import CardBox from "../components/card/CardBox";
import MainCard from "../components/box/MainCard";
import JoinCard from "../components/joinCard/JoinCard";
import CardToken from "../components/cardToken/CardToken";
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
              <JoinCard />
            </MainCard>
          </Grid>
        </Grid>
        {/*  */}
        <Grid container spacing={2}>
          <Grid
            className={classes.cardItem}
            item
            xs={12}
            sm={6}
            lg={3}
            spacing={3}
          >
            <MainCard>
              <CardToken
                image={profile}
                title="WBNB"
                text1="Reward Not Claimed"
                text2="N/A"
                text3="Total Earned (WBNB)"
                text4="Total (WBNB) Distributed"
                btn="Claim Manually"
              />
            </MainCard>
          </Grid>
          <Grid
            className={classes.cardItem}
            item
            xs={12}
            sm={6}
            lg={3}
            spacing={3}
          >
            <MainCard>
              <CardToken
                image={profile}
                title="Y-5 Token"
                text1="Reward Not Claimed"
                text2="N/A"
                text3="Total Earned (Y-5 Token)"
                text4="Total (Y-5 Token) Distributed"
                btn="Claim Manually"
              />
            </MainCard>
          </Grid>
          <Grid
            className={classes.cardItem}
            item
            xs={12}
            sm={6}
            lg={3}
            spacing={3}
          >
            <MainCard>
              <CardToken
                image={profile}
                title="Reflecto"
                text1="Reward Not Claimed"
                text2="N/A"
                text3="Total Earned (Reflecto)"
                text4="Total (Reflecto) Distributed"
                btn="Claim Manually"
              />
            </MainCard>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default RewardPage;
