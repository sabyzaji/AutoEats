import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScr from './components/main';
import Navbar from './components/Navbar';
import Fullmenu from './components/fullmenu';

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<MainScr />} />
        <Route path="/menuList" element={<Fullmenu />} />
      </Routes>

    </BrowserRouter>

  );
};

export default App;
