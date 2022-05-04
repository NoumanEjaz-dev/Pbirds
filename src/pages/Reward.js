import { makeStyles, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ChartGraph from "../components/charts/ChartGraph";
import CardBox from "../components/card/CardBox";
import MainCard from "../components/box/MainCard";
import JoinCard from "../components/joinCard/JoinCard";
import CardToken from "../components/cardToken/CardToken";
import profile from "../assest/images/profile.png";
import TotalPaidCard from "../components/totalpaidcard/TotalPaidCard";
import CryptoButtons from "../components/customizetokenbuttons/CryptoButtons";
import MenuButton from "../components/customizeMenuButton/MenuButton";

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
    CryptoInfoText: {
      color: theme.palette.common.white,
      fontFamily: "Roboto",
      fontWeight: "lighter",
      textAlign: "start",
      lineHeight: "30px",
      padding: "48px",
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
          <Grid
            className={classes.cardItem}
            item
            xs={12}
            sm={6}
            lg={3}
            spacing={3}
          >
            <MainCard>
              <TotalPaidCard
                image={profile}
                text1="Total Paid Out"
                text2="423.12"
                text3="USD"
              />
            </MainCard>
          </Grid>
          <Grid
            className={classes.cardItem}
            item
            xs={12}
            sm={12}
            lg={9}
            spacing={3}
          >
            <MainCard>
              <h3 className={classes.CryptoInfoText}>
                Rewards are automatically sent periodically. It can, however,
                take longer depending on your holdings and trading volume.
                Rewards will be triggered once they are big enough to cover the
                gas fees. If you are a smaller holder it may take from a couple
                of hours to a few days for rewards to appear in your wallet.
                However, you can manually claim your unclaimed rewards, but you
                will have to pay the gas fees.
              </h3>
            </MainCard>
          </Grid>
          <Grid
            className={classes.cardItem}
            item
            xs={12}
            sm={12}
            lg={3}
            spacing={3}
          >
            <MainCard>
              <CryptoButtons
                title="Current Reflections"
                image={profile}
                text1="Y-5 Token"
                text2="423.12"
                text3="USD"
                btn={<MenuButton />}
              />
            </MainCard>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default RewardPage;
