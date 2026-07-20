import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios';
import LayoutMain from './layouts/LayoutMain';
import AccountLayout from './layouts/AccountLayout/AccountLayout';
import 'primeicons/primeicons.css';

axios.defaults.baseURL = 'http://localhost:3000/';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutMain />}>
        </Route>
      </Routes>
    </BrowserRouter >
  );
};

export default App;
