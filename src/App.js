import React, { Component } from "react";
import "./App.css";
import Resource from "./components/Resource";
import resources from "./mock/resources";

class App extends Component {
  //[<Resource resource={aResource}/>, <Resource resource={aResource}]
  // constructor(props) {
  //   super(props);
  //   this.renderPosts.bind(this);
  // }
  // Resource = require("./components/Resource");

  renderPosts = () => {
    const display = resources.map((resource) => {
      return <Resource resource={resource} />;
    });

    return display;
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to BrainHive!</h1>
        {this.renderPosts()}
      </div>
    );
  }
}

export default App;
