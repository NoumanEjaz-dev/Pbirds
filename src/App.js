import Layout from "./components/layout/Layout";
import HomePage from "./pages/Home";
import SwapPage from "./pages/Swap";
import RewardPage from "./pages/Reward";
import NotFoundPage from "./pages/NotFound";
import { Routes, Route, } from "react-router-dom";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="swap" element={<SwapPage />} />
          <Route path="Reward" element={<RewardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}



export default App;

