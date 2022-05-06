import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import ToggleButton from "@material-ui/lab/ToggleButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  toggalButton: {
    background: theme.palette.common.yellow,
    color: theme.palette.common.white,
    width: "22px",
    height: "22px",
    "&:hover": {
      background: theme.palette.common.yellow,
    },
  },
}));

export default function CheckboxButton() {
  const classes = useStyles();
  const [selected, setSelected] = React.useState(false);

  return (
    <ToggleButton
      className={classes.toggalButton}
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >
      <CheckIcon className={classes.checboxButton} />
    </ToggleButton>
  );
}
