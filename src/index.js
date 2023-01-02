import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes } from 'react-router-dom'
import { Route } from "react-router";
import "./styles/index.css"
import Home from './pages/Home';
import FicheLogement from './pages/FicheLogement';
import Erreur from './pages/PageErreur';
import Apropos from './pages/Apropos.jsx';
import Header from './components/Header';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/JawadAmraoui_11_01012022" element={<Home />} />
        <Route path="/logement/:id" element={<FicheLogement />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
      <Footer/>      
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
