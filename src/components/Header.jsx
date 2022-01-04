import React from "react"
import logoKasaHeader from "../images/HeaderKasa.png"

class Header extends React.Component {
  render() {
    return (
      <header className="header-main">
        <div className="header-main-container">
          <img src={logoKasaHeader} alt="logo du Kasa" />
          <ul className="header-links">
            <li>Accueil</li>
            <li>A Propos</li>
          </ul>          
        </div>
      </header>
    );
  }
}

export default Header;
