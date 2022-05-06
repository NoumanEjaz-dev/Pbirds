import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import DownArrow from "../../assest/images/downArrow.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  customizeButton: {
    color: "#fff",
    alignItems: "center",
  },
  dropDownItems: {
    backgroundColor: "#111",
    color: "#fff",
    padding: "16px 20px",
    boxSizing: "border-box",
    border: "1px solid gray",
  },
  saveBtn: {
    padding: "10px 35px",
    background: "#309916",
    color: "#fff",
    "&:hover": {
      background: "#309916",
    },
  },
  arrowIcon: {
    width: "15px",
    height: "10px",
    marginTop: "-3px",
  },
  arrowIcon_2: {
    width: "15px",
    height: "10px",
    marginTop: "-3px",
    paddingLeft: "29px",
  },
}));

export default function MenuButton() {
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
    <>
      <div className={classes.root}>
        <div>
          <Button
            className={classes.customizeButton}
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            Customize
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
                <Paper className={classes.dropDownItems}>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <MenuItem onClick={handleClose}>Y-5 Token</MenuItem>
                        <img
                          className={classes.arrowIcon}
                          src={DownArrow}
                          alt="images"
                        />
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <MenuItem onClick={handleClose}>WBNB</MenuItem>
                        <img
                          className={classes.arrowIcon_2}
                          src={DownArrow}
                          alt="images"
                        />
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <MenuItem onClick={handleClose}>Reflecto</MenuItem>
                        <img
                          className={classes.arrowIcon}
                          src={DownArrow}
                          alt="images"
                        />
                      </div>
                      <Button onClick={handleClose} className={classes.saveBtn}>
                        Save
                      </Button>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    </>
  );
}
