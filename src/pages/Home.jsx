import React from "react"
import BannerHome from "../components/BannerHome"

class Home extends React.Component {
  render() {
    return (
      <main className="page page-home">
        <div className="page-container">
          <BannerHome/> 
        </div>
      </main>
    );
  }
}

export default Home;
