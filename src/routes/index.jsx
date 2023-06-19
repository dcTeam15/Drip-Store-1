import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { useContext } from "react";
import { LoginContext } from "../App";

export const Ways = () => {
  const { logado } = useContext(LoginContext);

  return (
    <BrowserRouter>
      <Routes>
        {logado ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
