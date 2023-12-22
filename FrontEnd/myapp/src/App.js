import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import SignUp from './components/signUp/signUp';
import Coffee from './components/Coffee/Coffee';
import About from './components/About/About';
import NotFound from './components/Notfound/NotFound';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignUp />} />
      <Route path='/coffees' element={<Coffee/>} />
      <Route path='/About' element={<About/>} />
      <Route path='*' element={<Navigate to="/notfound"/>} />
      <Route path='/notfound' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
