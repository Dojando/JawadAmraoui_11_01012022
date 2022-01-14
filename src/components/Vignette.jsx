import React from "react"
import { Link } from "react-router-dom";

class Vignette extends React.Component {

  render() {
    return (
      <Link to={`/logement/${this.props.id}`}>
        <div className="vignette">
          <img src={this.props.cover} alt="couverture du logement" />
          <h2>{this.props.titre}</h2>
        </div>        
      </Link>
    );
  }
}

export default Vignette;