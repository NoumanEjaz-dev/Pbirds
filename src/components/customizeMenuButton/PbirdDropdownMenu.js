import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assest/logo/logo.png";

const useStyles = makeStyles((theme) => ({
  Dropdpwn: {
    border: "1px solid #fff",
    color: theme.palette.common.white,
    width: "100%",
    padding: "16px 10px",
    background: theme.palette.common.black,
    "& hover": {
      background: theme.palette.common.black,
    },
    // flex: "1",
    // display: "flex",
  },
  logo: {
    width: "10px",
  },
}));

export default function PbirdDropdownMenu() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ width: "100%" }}>
      <Button
        className={classes.Dropdpwn}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <span style={{ alignItems: "center" }}>
          <img className={classes.logo} src={logo} alt="img" /> Pbird
        </span>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>PBird</MenuItem>
        <MenuItem onClick={handleClose}>Y-5 Token</MenuItem>
        <MenuItem onClick={handleClose}>Reflecto</MenuItem>
      </Menu>
    </div>
  );
}
