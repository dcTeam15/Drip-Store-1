import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageLogin from "../pages/PageLogin";
import NotFound from "../pages/NotFound";
import { useContext } from "react";
import { AuthContext } from "../App";
import PageLayout from "../layouts/PageLayout";
import AuthLayout from "../layouts/AuthLayout";
import PageFinishShop from "../pages/PageFinishShop";

const Ways = () => {
  const { isLoggeg } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        {isLoggeg ? (
          <Route path="/" element={<PageLayout />}>
            <Route index element={<PageHome />} />
            <Route path="/conclusao-de-compra" element={<PageFinishShop />} />
          </Route>
        ) : (
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<PageLogin />} />
          </Route>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Ways;