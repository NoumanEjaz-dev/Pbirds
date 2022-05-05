import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core";
import NavItem from "./NavItem";

const useStyles = makeStyles((theme) => ({
  navlist: {
    listStyle: "none",
    margin: "0",
    display: "flex",
    alignItems: "center",
  },

  btn: {
    fontWeight: "500",
    fontSize: "18px",
    textDecoration: "none !important",
    fontFamily: "ROBOTO",
    color: "#fff",
    width: "130px",
    textAlign: "center",
    height: "41px",
    backgroundColor: theme.palette.common.yellow,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    marginLeft: "35px",
  },
}));

const ITEMS = [
  {
    title: "Home",
    routePath: "/",
  },
  {
    title: "Reward",
    routePath: "/reward",
  },
  {
    title: "Swap",
    routePath: "/swap",
  },
];

const NavList = () => {
  const classes = useStyles();
  return (
    <>
      <ul className={classes.navlist}>
        {ITEMS.map(({ title, routePath }, index) => (
          <NavItem key={index} title={title} routePath={routePath} />
        ))}
        <li>
          <Link className={classes.btn}>Collect Wallet</Link>
        </li>
      </ul>
    </>
  );
};

export default NavList;
