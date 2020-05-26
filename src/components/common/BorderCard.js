import React, { Component } from "react";

class BorderCard extends Component {
  state = {
    hover: false,
  };

  onChange = () => {
    if (this.props.hoverable) {
      this.setState({
        hover: !this.state.hover,
      });
    }
  };

  render() {
    return (
      <div
        style={
          this.state.hover
            ? { ...myStyle.hover, ...this.props.style }
            : { ...myStyle.card, ...this.props.style }
        }
        onClick={this.props.onClick}
        onMouseEnter={this.onChange}
        onMouseLeave={this.onChange}
      >
        {this.props.children}
      </div>
    );
  }
}

const myStyle = {
  card: {
    border: "1px solid #171717",
    borderBottomWidth: 0,
    borderRadius: 20,
    marginBottom: 25,
    padding: "0 8px",
    width: "80%",
    maxWidth: 500,
    boxShadow: "5px 3px 5px #000000",
    backgroundColor: "#f7f7f7",
  },
  hover: {
    border: "1px solid #171717",
    borderBottomWidth: 0,
    borderRadius: 20,
    marginBottom: 25,
    padding: "0 8px",
    width: "80%",
    maxWidth: 500,
    backgroundColor: "#f7f7f7",
    boxShadow: "15px 9px 15px #000000",
  },
};

export default BorderCard;
