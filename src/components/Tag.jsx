import React from "react"

class Tag extends React.Component {
  render() {
    return (
      <div className="tag">
        <p>{this.props.tagName}</p>
      </div>
    );
  }
}

export default Tag;