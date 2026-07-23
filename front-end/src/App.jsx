import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import AccountLayout from './layouts/AccountLayout/AccountLayout';
import LayoutMain from './layouts/LayoutMain/LayoutMain';
import Homepage from './pages/homepage/Homepage';
import "bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import AlignmentDemo from './pages/homepage/AlignmentDemo';


axios.defaults.baseURL = 'http://localhost:3000/';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route path="/" element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;