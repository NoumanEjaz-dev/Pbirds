import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import SettingsIcon from "@material-ui/icons/Settings";
import CheckboxButton from "../../components/checkbox/CheckboxButton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  SettingIcon: {
    color: theme.palette.common.yellow,
  },
  settingMenu: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px",
  },
  settingPopUp: {
    width: "300px",
    color: theme.palette.common.white,
    background: "#111",
  },
  settingBox: {
    background: "#000",
    color: "#fff",
    display: "flex",
    width: "40px",
    height: "12px",
    alignItems: "center",
    padding: "5px",
    borderRadius: "15%",
    justifyContent: "space-evenly",
    border: "2px solid #D09A0A",
  },
  SettingOptions: {
    fontSize: "15px",
  },
}));

export default function Setting() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <SettingsIcon className={classes.SettingIcon} />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper className={classes.settingPopUp}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <div className={classes.settingMenu}>
                      <MenuItem onClick={handleClose}>Setting</MenuItem>
                      <MenuItem onClick={handleClose}>Go Back</MenuItem>
                    </div>
                    <div className={classes.settingMenu}>
                      <MenuItem
                        className={classes.SettingOptions}
                        onClick={handleClose}
                      >
                        Settings
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <span className={classes.settingBox}>
                          <p>1</p>
                          <p>%</p>
                        </span>
                      </MenuItem>
                    </div>
                    <div className={classes.settingMenu}>
                      <MenuItem
                        className={classes.SettingOptions}
                        onClick={handleClose}
                      >
                        AutoTax
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <CheckboxButton />
                      </MenuItem>
                    </div>
                    <div className={classes.settingMenu}>
                      <MenuItem
                        className={classes.SettingOptions}
                        onClick={handleClose}
                      >
                        Max Auto-Tax
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        {" "}
                        <span className={classes.settingBox}>
                          <p>50</p>
                          <p>%</p>
                        </span>
                      </MenuItem>
                    </div>
                    <div className={classes.settingMenu}>
                      <MenuItem
                        className={classes.SettingOptions}
                        onClick={handleClose}
                      >
                        Route Refresh Time
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        {" "}
                        <span className={classes.settingBox}>
                          <p>15</p>
                          <p>sec</p>
                        </span>
                      </MenuItem>
                    </div>
                    <div className={classes.settingMenu}>
                      <MenuItem
                        className={classes.SettingOptions}
                        onClick={handleClose}
                      >
                        Multi Tx
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        {" "}
                        <span className={classes.settingBox}>
                          <p>1</p>
                          <p></p>
                        </span>
                      </MenuItem>
                    </div>
                    <div className={classes.settingMenu}>
                      <MenuItem
                        className={classes.SettingOptions}
                        onClick={handleClose}
                      >
                        Show Swap Loading
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        {" "}
                        <CheckboxButton />
                      </MenuItem>
                    </div>
                    <div className={classes.settingMenu}>
                      <MenuItem
                        className={classes.SettingOptions}
                        onClick={handleClose}
                      >
                        Friendly Errors
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        {" "}
                        <CheckboxButton />
                      </MenuItem>
                    </div>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
