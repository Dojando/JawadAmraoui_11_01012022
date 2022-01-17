import React from "react"

class Carrousel extends React.Component {

  state = {
    photosIndex: 0
  }

  carrouselSuivant = () => {
    if (this.state.photosIndex < this.props.photos.length - 1) {
      this.setState({ photosIndex: this.state.photosIndex + 1 })
    } else {
      this.setState({ photosIndex: 0 })
    }
  }

  carrouselPrecedent = async () => {
    if (this.state.photosIndex > 0) {
      this.setState({ photosIndex: this.state.photosIndex - 1 })
    } else {
      this.setState({ photosIndex: this.props.photos.length - 1 })
    }
  }

  render() {
    return (
      <div className="carrousel-container">
        <img src={this.props.photos[this.state.photosIndex]} alt="aperçu du logement" />
        
        { this.props.photos.length === 1 ? null : 
        <svg className="svg-precedent" onClick={this.carrouselPrecedent} width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
        </svg> }

        { this.props.photos.length === 1 ? null :
        <svg className="svg-suivant" onClick={this.carrouselSuivant} width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
        </svg> 
        }
        <p className="carrousel-compteur">{this.state.photosIndex + 1}/{this.props.photos.length}</p>
      </div>
    );
  }
}

export default Carrousel;