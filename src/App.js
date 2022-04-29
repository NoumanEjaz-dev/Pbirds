// import { makeStyles } from "@material-ui/core";
import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import Reward from "./pages/Reward";
import Swap from "./pages/Swap";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     color: theme.palette.common.lightDark
//   },
// }));
function App() {
  return (
    <div>
      <Layout></Layout>
      {/*  */}
      <Routes>
        <Route path="/" element={<Reward />}></Route>
        <Route path="/reward" element={<Reward />}></Route>
        <Route path="/swap" element={<Swap />}></Route>
      </Routes>
    </div>
  );
}

export default App;
