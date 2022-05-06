import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import SwapForm from "../swapform/SwapForm";
import TransferForm from "../transferFom/TransferForm";
import Grid from "@material-ui/core/Grid";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiAppBar-root": {
      alignItems: "flex-end",
      backgroundColor: "transparent",
      paddingRight: "12px",
      marginTop: "40px",
    },
    "& .MuiTabs-root": {
      backgroundColor: theme.palette.common.lightDark,
      width: "350px",
      [theme.breakpoints.down("xs")]: {
        width: "240px",
      },
      " & .MuiTab-textColorPrimary.Mui-selected": {
        color: "#fff",
      },
      " & .PrivateTabIndicator-colorPrimary-9": {
        backgroundColor: theme.palette.common.yellow,
      },
    },
    " & .MuiTab-textColorPrimary": {
      color: "#fff",
    },
  },

  formsContainer: {
    width: "100%",
  },
  tabButton: {
    "&:hover": {
      borderBottom: "2px solid #D09A0A",
    },
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12} lg={3}></Grid>
          <Grid item xs={12} lg={6}>
            <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="false"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab
                  className={classes.tabButton}
                  label="Item One"
                  {...a11yProps(0)}
                />
                <Tab
                  className={classes.tabButton}
                  label="Item Two"
                  {...a11yProps(1)}
                />
              </Tabs>
            </AppBar>
          </Grid>
          <Grid item xs={12} lg={3}></Grid>
        </Grid>
        <div className={classes.formsContainer}>
          <TabPanel value={value} index={0} dir={theme.direction}>
            <SwapForm />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <TransferForm />
          </TabPanel>
        </div>
      </div>
    </>
  );
}
