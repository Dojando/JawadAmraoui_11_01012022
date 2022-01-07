import React from "react"
import Carrousel from "../components/CarrouselFiche";
import Tag from "../components/Tag";

class FicheLogement extends React.Component {
  render() {
    return (
      <main className="page page-logement">
        <div className="page-container">
          <Carrousel />
          <header className="logement-infos">
            <div className="logement-detail-container">
              <h1>Cozy loft on the Canal Saint-Martin</h1>
              <p className="logement-location">Paris, Ile de france</p>
              <div className="tagslist">
                <Tag tagName="City" />
                <Tag tagName="Paris" />
                <Tag tagName="Test test" />
              </div>
            </div>
            <div className="user-detail-container">
              <div className="user-profil">
                <p>Alexandre Dumas</p>
                <div className="user-photo">
                  
                </div>
              </div>
              <div className="logement-note">

              </div>
            </div>
          </header>
          <section className="logement-dropdown-container">
            <div className="logement-description-container">

            </div>
            <div className="logement-equipement-container">

            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default FicheLogement;
