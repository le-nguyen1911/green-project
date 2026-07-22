import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios';
import LayoutMain from './layouts/LayoutMain';
import AccountLayout from './layouts/AccountLayout/AccountLayout';
import 'primeicons/primeicons.css';
import Homapage from './homepage/Homepage';

axios.defaults.baseURL = 'http://localhost:3000/';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route path='/' element={<Homapage />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
};

export default App;
