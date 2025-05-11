
import React from 'react';
import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logo from './assets/logo.webp';
import { Home, CreatePost } from './pages';



const App = () => {
  return (
    <BrowserRouter>

      <header className="app-header">
        <Link to="/" className="logo-container">
          <img src={logo} alt="logo" className="logo-img" />
          <div>
            <h1 className="logo-text">Dream-Ai</h1>
            <p className="logo-subtext">Dreamai.com · 1627254619</p>
          </div>
        </Link>
        <Link to="/create-post" className="create-btn">Create</Link>
      </header>


      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/create-post" element={<CreatePost />} />
          
        </Routes>
      </main>









    </BrowserRouter>
  );
};

export default App;
