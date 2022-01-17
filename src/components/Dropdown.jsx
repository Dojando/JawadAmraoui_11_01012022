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
    let isObject = false;
    const equipement = [];
    if (typeof(this.props.content) === 'object') {
      isObject = true;
      for (let i in this.props.content) {
        equipement.push(this.props.content[i])
      }
    }
    let listObject = <ul>{equipement.map(function(el, index) {
      return (<li key={index}>{el}</li>)
    })}</ul>;

    return (
      <div className={this.state.toggleDropdown ? "dropdown" : "dropdown hide-dropdown"}>
        <div onClick={this.handleDropdown} className="dropdown-header">
          <p>{this.props.title}</p>
          <img src={this.state.toggleDropdown ? LogoDropdownOpen : LogoDropdownClosed} alt="logo d'état du dropdown" />
        </div>
        <div className="dropdown-body">
          { isObject ? listObject : <p>{this.props.content}</p> }
        </div>       
      </div>
    );
  }
}

export default Dropdown;