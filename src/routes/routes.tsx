import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Conta } from "../pages/Conta";
import { ContaInfo } from "../pages/ContaInfo";
import { useContext } from "react";
import { AppContext } from "../components/AppContext";

export const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/conta/:id" element={isLoggedIn ? <Conta /> : <Home />} />
      <Route path="/containfo" element={<ContaInfo />} />
    </Routes>
  );
};
