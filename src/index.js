import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from "react-router";
import "./styles/index.css"
import Home from './pages/Home';
import FicheLogement from './pages/FicheLogement';
import Erreur from './pages/PageErreur';
import Header from './components/Header';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Erreur />
      <Footer/>      
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
