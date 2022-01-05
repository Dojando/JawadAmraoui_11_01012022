import React from "react"
import BannerApropos from "../components/BannerApropos";
import Dropdown from "../components/Dropdown";

class Apropos extends React.Component {
  render() {
    return (
      <main className="page page-apropos">
        <div className="page-container">
          <BannerApropos />
          <Dropdown />
        </div>
      </main>
    );
  }
}

export default Apropos;
