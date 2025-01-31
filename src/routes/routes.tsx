import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Conta } from "../pages/Conta";
import { ContaInfo } from "../pages/ContaInfo";
import { useContext } from "react";
import { AppContext } from "../components/AppContext";

export const MainRoutes = () => {
  const { user } = useContext(AppContext);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/conta/:id" element={user ? <Conta /> : <Home />} />
      <Route
        path="/containfo"
        element={user.login === true ? <ContaInfo /> : <Home />}
      />
    </Routes>
  );
};
