import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { useState } from 'react'
import HomePage from './homepage/HomePage'
import axios from 'axios';
import LayoutMain from './layoutmain/LayoutMain';
import InTroDuce from './homepage/InTroDuce';


axios.defaults.baseURL = 'http://localhost:3000/';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutMain />}>

          <Route path="home-page" element={<HomePage />} />
          <Route path="gioi-thieu" element={<InTroDuce />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
};

export default App;
