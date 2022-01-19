import React from "react"
import Carrousel from "../components/CarrouselFiche";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import Dropdown from "../components/Dropdown";

class FicheLogement extends React.Component {

  state = {
    data: require('../data.json'),
    logementData: {},
    equipments: [],
    host: {},
    pictures: [],
    tags: [],
  }
  
  componentDidMount() {
    // recupération des données et stockage dans le state. 
    const logementData = this.state.data.find(el => el.id === window.location.pathname.split("/")[2])
    if (logementData === undefined) {
      // si aucune donnée, affichage de la page d'erreur
      window.location = "http://localhost:3000/erreur";
    }
    const equipments = logementData.equipments;
    const host = logementData.host;
    const pictures = logementData.pictures;
    const tags = logementData.tags;
    this.setState({ logementData: logementData, equipments: equipments, host: host, pictures: pictures, tags: tags })
  }

  calculNote = () => {
    const notes = [];
    let x = 0;
    let y = 0;
    while (y < this.state.logementData.rating) {
      notes.push(<Rating key={x} color="#FF6060"/>)
      y++;
      x++;
    }
    if (x < 5) {
      while (x < 5) {
        notes.push(<Rating key={x} color="#E3E3E3"/>)
        x++;
      }      
    }
    return notes;
  }

  render() { 
    return (
      <main className="page page-logement">
        <div className="page-container">
          { this.state.pictures ? <Carrousel photos={this.state.pictures}/> : null }
          <header className="logement-infos">
            <div className="logement-detail-container">
              <h1>{this.state.logementData.title}</h1>
              <p className="logement-location">{this.state.logementData.location}</p>
              <div className="tagslist">
                {this.state.tags.map(function(el, index) {
                  return <Tag tagName={el} key={index}/>
                })}
              </div>
            </div>
            <div className="user-detail-container">
              <div className="user-profil">
                <p>{this.state.host.name}</p>
                <div className="user-photo">
                  <img src={this.state.host.picture} alt="hôte du logement" />
                </div>
              </div>
              <div className="logement-note">
                { this.state.logementData.rating ? this.calculNote() : null }
              </div>
            </div>
          </header>
          <section className="logement-dropdown-container">
            <div className="logement-description-container">
              <Dropdown title="Description" content={this.state.logementData.description}/>
            </div>
            <div className="logement-equipement-container">
              <Dropdown title="Équipements" content={this.state.equipments}/>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default FicheLogement;
