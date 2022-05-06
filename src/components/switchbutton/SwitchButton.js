import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ImportExportIcon from "@material-ui/icons/ImportExport";

const useStyles = makeStyles((theme) => ({
 root: {
    "& > *": {
      margin: theme.spacing(1),
      backgroundColor: "#1C1C1C",
      alignItems: "center",
      textAlign: "center",
    },
  },
  importExportIcon: {
    color: theme.palette.common.yellow,
    fontSize: "25px",
  },
}));

export default function SwitchButton({onclick}) {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ textAlign: "center" }} onClick={onclick}>
      <IconButton aria-label="importExport">
        <ImportExportIcon className={classes.importExportIcon} />
      </IconButton>
    </div>
  );
}
