import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  inputFiledBox: {
    color: "#fff",
    background: "#000",
    display: "grid",
    padding: "10px 20px 0px 20px",
    fontFamily: "Roboto",
    // width: "100%",
    borderRadius: "5px",
    border: "1px solid #fff",
    textAlign: "center",
  },
  inpbox: {
    outline: "none",
    background: "#000",
    border: "none",
    padding: "10px",
    color: "#fff",
    fontFamily: "Roboto",
    flex: "1",
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
}));

const ExchangeInput =  ({from,balance,coinName,onchange,value}) => {
    const classes = useStyles()
    return (
      <div className={classes.inputFiledBox}>
        <span className={classes.inputDetail}>
          {" "}
          <label>{from}</label>
          <label>Balance: {balance}</label>
        </span>
        <span className={classes.inputText}>
          {" "}
          <input className={classes.inpbox} name={coinName} value={value}  onChange={onchange}/>
          <label>{coinName}</label>
        </span>
      </div>
    )}


export default ExchangeInput;