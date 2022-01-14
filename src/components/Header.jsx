import React from "react"
import { Link } from "react-router-dom";
import logoKasaHeader from "../images/HeaderKasa.png"

class Header extends React.Component {
  render() {
    return (
      <header className="header-main">
        <div className="header-main-container">
          <img src={logoKasaHeader} alt="logo du Kasa" />
          <ul className="header-links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/a-propos">A Propos</Link></li>
          </ul>          
        </div>
      </header>
    );
  }
}

export default Header;
