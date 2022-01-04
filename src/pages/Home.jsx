import React from "react"
import BannerHome from "../components/BannerHome"
import ListeVignette from "../components/ListeVignette"

class Home extends React.Component {
  render() {
    return (
      <main className="page page-home">
        <div className="page-container">
          <BannerHome/>
          <ListeVignette/>
        </div>
      </main>
    );
  }
}

export default Home;
