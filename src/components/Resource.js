import React, { Component } from "react";
import { Redirect } from "react-router-dom";

/*
  in charge of displaying resource details and detecting a click
  this has state because...
*/

class Resource extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    const { resource } = this.props;
    this.setState({
      clicked: true,
    });
  };

  render() {
    const { resource } = this.props;
    // const {resource} = props;

    return (
      <div className={"box"} onClick={this.handleClick}>
        {this.state.clicked ? (
          <Redirect to={`/viewCourse/${resource.id}`} />
        ) : null}
        <h2>{resource.title}</h2>
        <p>{resource.resourceAuthor}</p>
        <p>Published on: {resource.datePublished}</p>
        {resource.videoLength ? (
          <p>Length: {resource.videoLength} minutes</p>
        ) : null}
        {/* conditional ? true code : false code */}
        <p>Comments: {resource.comments.length}</p>
      </div>
    );
  }
}

export default Resource;
