import React from "react"
import LogoDropdownClosed from "../images/LogoDropdownClosed.png"
import LogoDropdownOpen from "../images/LogoDropdownOpen.png"


class Dropdown extends React.Component {

  state = {
    toggleDropdown: false,
  }

  handleDropdown = () => {
    if (this.state.toggleDropdown === false) {
      this.setState({toggleDropdown: true})
    } else if (this.state.toggleDropdown === true) {
      this.setState({toggleDropdown: false})
    }
  }

  render() {
    return (
      <div className={this.state.toggleDropdown ? "dropdown" : "dropdown hide-dropdown"}>
        <div onClick={this.handleDropdown} className="dropdown-header">
          <p>{this.props.details.title}</p>
          <img src={this.state.toggleDropdown ? LogoDropdownClosed : LogoDropdownOpen} alt="logo d'état du dropdown" />
        </div>
        <div className="dropdown-body">
          <p>{this.props.details.content}</p>
        </div>       
      </div>
    );
  }
}

export default Dropdown;