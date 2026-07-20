import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { useState } from 'react'
import HomePage from './pages/homepage/HomePage'
import axios from 'axios';
import LayoutMain from './layouts/LayoutMain';
import InTroDuce from './pages/homepage/InTroDuce';
import Profile from './pages/accounts/Profile';
import AccountLayout from './layouts/accountlayout/AccountLayout';


axios.defaults.baseURL = 'http://localhost:3000/';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutMain />}>
          <Route path="/account" element={<AccountLayout />}>

            <Route
              index
              // element={<Dashboard />}
            />

            <Route
              path="orders"
              // element={<Orders />}
            />

            <Route
              path="address"
              // element={<Address />}
            />

            <Route
              path="profile"
              // element={<Profile />}
            />

            <Route
              path="password"
              // element={<ChangePassword />}
            />

          </Route>
          <Route path="home-page" element={<HomePage />} />
          <Route path="gioi-thieu" element={<InTroDuce />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
};

export default App;
