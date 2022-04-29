import { Drawer } from "@material-ui/core";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* <Drawer /> */}
      <main>{children}</main>
    </>
  );
};
export default Layout;
