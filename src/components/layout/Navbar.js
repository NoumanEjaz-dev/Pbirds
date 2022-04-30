import React from "react";
import logo from "../../assest/logo/logo.png";

import {
  AppBar,
  Toolbar,
  Typography,
  Hidden,
  makeStyles,
} from "@material-ui/core";

import TemporaryDrawer from "../drawer/Drawer";
import NavList from "../nav/desktop/NavList";
import HamBurger from "../hamburger/Hamburger";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiToolbar-regular": {
      height: "75px",
      backgroundColor: theme.palette.common.black,
    },
  },
  title: {
    flexGrow: 1,
    display: "flex",
    padding: "2px",
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

  const toggleDrawer = (anchor, open) => () => {
    setState({ [anchor]: open });
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
            <NavList />
          </Hidden>

          <Hidden mdUp>
            <HamBurger toggleDrawer={toggleDrawer} />
          </Hidden>
        </Toolbar>
      </AppBar>
      <TemporaryDrawer toggleDrawer={toggleDrawer} isOpen={state["left"]} />
    </div>
  );
}
