import React from "react"
import Vignette from "../components/Vignette"

class ListeVignette extends React.Component {
  render() {
    return (
      <div className="liste-vignette">
        <Vignette/>
        <Vignette/>
        <Vignette/>
        <Vignette/>
      </div>
    );
  }
}

export default ListeVignette;