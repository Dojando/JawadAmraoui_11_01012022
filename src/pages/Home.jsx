import React from "react"
import BannerHome from "../components/BannerHome"
import Vignette from "../components/Vignette"

class Home extends React.Component {
  state = {
    data: require('../data.json')
  }

  render() {
    return (
      <main className="page page-home">
        <div className="page-container">
          <BannerHome/>
          <div className="liste-vignette">
            {this.state.data.map(function(el) {
              return <Vignette cover={el.cover} titre={el.title} id={el.id} key={el.id}/>
            })}
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
