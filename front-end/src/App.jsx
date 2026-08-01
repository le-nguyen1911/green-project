import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import LayoutMain from "./layouts/LayoutMain.jsx";
import "primeicons/primeicons.css";
import AccountLayout from "./layouts/accountlayout/AccountLayout.jsx";
import { UserProvider } from "./hooks/UserContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Account/Profile.jsx";
import InformationPesonal from "./pages/Account/InformationPesonal";
import { PrimeReactProvider } from "@primereact/core";
import Aura from "@primeuix/themes/aura";
import Order from "./pages/Account/Order.jsx";
import Cart from "./pages/Cart.jsx";

const primereact = {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false,
    },
  },
};
axios.defaults.baseURL = "http://localhost:3000/";

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <PrimeReactProvider {...primereact}>
          <Routes>
            <Route path="/" element={<LayoutMain />}>
              <Route path="login" element={<Login />} />
              <Route path="cart" element={<Cart />} />
              <Route element={<ProtectedRoute />}>
                <Route path="account" element={<AccountLayout />}>
                  <Route index element={<Profile />} />
                  <Route path="orders" element={<Order />} />
                  <Route path="profile" element={<InformationPesonal />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </PrimeReactProvider>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
