import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Hidden } from "@material-ui/core";
import Btn from "@material-ui/core/Link";
import TemporaryDrawer from "../drawer/Drawer";
import logo from "../../assest/logo/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiToolbar-regular": {
      height: "75px",
      backgroundColor: theme.palette.common.black,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "flex",
    padding: "2px",
  },
  navlist: {
    listStyle: "none",
    margin: "0",
    display: "flex",
    alignItems: "center",
  },
  navItem: {
    padding: "0px 1.5rem",
    "& a": {
      textDecoration: "none",
      fontWeight: "500",
      fontSize: "18px",
      lineHeight: "22px",
      fontFamily: "ROBOTO",
      color: "#ffffff",
    },
  },
  btn: {
    fontWeight: "500",
    fontSize: "16px",
    textDecoration: "none !important",
    fontFamily: "ROBOTO",
    color: "#fff",
    width: "130px",
    // display: "inline-block",
    textAlign: "center",
    height: "41px",
    backgroundColor: theme.palette.common.yellow,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
  },
  logoImg: {
    width: "20px",
  },
  logoText: {
    paddingLeft: "8px",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <span>
              {" "}
              <img className={classes.logoImg} src={logo} alt="logo" />
            </span>
            <span className={classes.logoText}> Pepperbird Finance</span>
          </Typography>
          <Typography className={classes.root}></Typography>
          {/* ul list */}
          <Hidden smDown>
            <ul className={classes.navlist}>
              <li className={classes.navItem}>
                <Link to="/">Home</Link>
              </li>
              <li className={classes.navItem}>
                <Link to="/reward">Reward</Link>
              </li>
              <li className={classes.navItem}>
                <Link to="/swap">Swap</Link>
              </li>
              <li>
                <Btn className={classes.btn}>Connect Wallet</Btn>
              </li>
            </ul>
            {/* <Button className={classes.btnCollectWallet} color="inherit">
              Login
            </Button> */}
          </Hidden>

          <Hidden mdUp>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer("left", true)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <TemporaryDrawer toggleDrawer={toggleDrawer} isOpen={state["left"]} />
    </div>
  );
}
