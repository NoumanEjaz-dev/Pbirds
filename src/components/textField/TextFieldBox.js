import { makeStyles } from "@material-ui/core/styles";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PbirdDropdownMenu from "../customizeMenuButton/PbirdDropdownMenu";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  inputFiledBox: {
    color: "#fff",
    background: "#000",
    display: "grid",
    padding: "0px 20px 0px 20px",
    fontFamily: "Roboto",
    borderRadius: "5px",
    border: "1px solid #fff",
    textAlign: "center",
  },
  pbirddDropdownInput: {
    width: "100%",
    color: "#fff",
    background: "#000",
    display: "grid",
    padding: "0px 20px 0px 20px",
    fontFamily: "Roboto",
    borderRadius: "5px",
    border: "1px solid #fff",
    textAlign: "center",
    marginLeft: "15px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0px",
      marginTop: "16px",
    },
  },
  inpbox: {
    outline: "none",
    background: "#000",
    border: "none",
    padding: "20px 10px",
    color: "#fff",
    fontFamily: "Roboto",
    [theme.breakpoints.down("xs")]: {
      width: "110px",
    },
  },
  inputDetail: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  inputText: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  pbirddDropdown: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      flexWrap: "wrap",
    },
  },
  OptionalMessageInput: {
    outline: "none",
    background: "#000",
    border: "none",
    color: "#fff",
    fontFamily: "Roboto",
    padding: "30px 0px",
  },
  TransferBtn: {
    margin: "5px",
    marginTop: "15px",
    color: theme.palette.common.white,
    fontFamily: "Roboto",
    backgroundColor: "#D09A0A",
    padding: "8px 70px",
    "&:hover": {
      backgroundColor: "#D09A0A",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "8px 45px",
    },
  },
}));

const TextFieldBox = ({ coinName, onchange, value }) => {
  const classes = useStyles();
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "35px" }}>
        <div className={classes.inputFiledBox}>
          <span className={classes.inputText}>
            {" "}
            <input
              className={classes.inpbox}
              placeholder="Enter Wallet Address"
              name={coinName}
              value={value}
              onChange={onchange}
            />
            <label>
              <FileCopyIcon style={{ color: "#D09A0A" }} />
            </label>
          </span>
        </div>
        <br />
        <div className={classes.pbirddDropdown}>
          <PbirdDropdownMenu />
          <div className={classes.pbirddDropdownInput}>
            <span className={classes.inputText}>
              {" "}
              <input
                className={classes.inpbox}
                placeholder="0.0"
                name={coinName}
                value={value}
                onChange={onchange}
              />
            </span>
          </div>
        </div>
        <br />
        <div className={classes.inputFiledBox}>
          <span className={classes.inputText}>
            {" "}
            <input
              className={classes.OptionalMessageInput}
              placeholder="Write and Optional Message"
              name={coinName}
              value={value}
              onChange={onchange}
            />
          </span>
        </div>
        <Button className={classes.TransferBtn}>Transfer</Button>
      </div>
    </>
  );
};

export default TextFieldBox;
