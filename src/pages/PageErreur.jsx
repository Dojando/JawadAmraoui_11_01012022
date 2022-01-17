import React from "react"
import { Link } from "react-router-dom";

class Erreur extends React.Component {
  render() {
    return (
      <main className="page page-erreur">
        <div className="page-container page-erreur-container">
          <h1>404</h1>
          <p className="message-erreur">Oups! La page que 
vous demandez n'existe pas.</p>
          <p className="page-erreur-lien-home"><Link to="/">Retourner sur la page d’accueil</Link></p>
        </div>
      </main>
    );
  }
}

export default Erreur;
