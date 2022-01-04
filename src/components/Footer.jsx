import React from "react"
import logoKasaFooter from "../images/FooterKasa.png"

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-main">
        <div className="div-logo-footer">
          <img src={logoKasaFooter} alt="logo du site Kasa en noir et blanc" />
        </div>
        <p>© 2022 Kasa. All rights reserved</p>          
      </footer>
    );
  }
}

export default Footer;
