import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios';
import LayoutMain from './layouts/LayoutMain';
import AccountLayout from './layouts/AccountLayout/AccountLayout';
import 'primeicons/primeicons.css';
import { UserProvider } from './hooks/UserContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Profile from './pages/Account/Profile';
import InformationPesonal from './pages/Account/InformationPesonal';
import { PrimeReactProvider } from '@primereact/core';
import Aura from '@primeuix/themes/aura';


const primereact = {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false
    }
  }
};
axios.defaults.baseURL = 'http://localhost:3000/';

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <PrimeReactProvider {...primereact}>
          <Routes>
            <Route path='/' element={<LayoutMain />}>
              <Route path='login' element={<Login />} />
              <Route element={<ProtectedRoute />} >
                <Route path='account' element={<AccountLayout />} >
                  <Route index element={<Profile />} />
                  <Route path='orders' />
                  <Route path='profile' element={<InformationPesonal />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </PrimeReactProvider>
      </BrowserRouter >
    </UserProvider>
  );
};

export default App;
