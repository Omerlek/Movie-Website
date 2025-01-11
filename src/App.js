import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './compos/home';
import VodInput from './compos/vodInput';
import Footer from './compos/footer'
import MovieInfo from './compos/movieInfo'; 
import About from './compos/about';

function App() {
  return (
    <BrowserRouter>
      <VodInput />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/info/:id" element={<MovieInfo />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
