import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios';
import AccountLayout from './layouts/AccountLayout/AccountLayout';
import 'primeicons/primeicons.css';
import LayoutMain from './layouts/LayoutMain/LayoutMain';
import Homepage from './pages/homepage/Homepage';



axios.defaults.baseURL = 'http://localhost:3000/';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route path='/' element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
};

export default App;
