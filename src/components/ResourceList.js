import React, { Component } from "react";
import Resource from "./Resource";

/*
  in charge of displaying all the resources
  this does not have state because...
*/

class ResourceList extends Component {
  state = {
    query: "",
    searchedResources: [...this.props.resources],
  };

  handleChange = (e) => {
    const query = e.target.value;
    const newList = this.props.resources.filter(
      (resource) =>
        resource.title.toLowerCase().indexOf(query.toLowerCase()) >= 0 ||
        resource.summary.toLowerCase().indexOf(query.toLowerCase()) >= 0
      //   return true;
      // }
      // return false;
    );

    this.setState({
      query,
      searchedResources: newList,
    });
  };

  renderPosts = () => {
    const display = this.state.searchedResources.map((resource) => {
      return (
        <Resource
          resource={resource}
          key={resource.id}
          onSelect={this.props.onSelect}
        />
      );
    });

    return display;
  };

  render() {
    return (
      <div>
        {/* TODO: add search bar */}
        <div style={myStyles.searchBar}>
          <input
            style={myStyles.input}
            type="text"
            placeholder="🔍 Search Titles"
            onChange={this.handleChange}
          />
        </div>
        <div className="resourceList">{this.renderPosts()}</div>;
      </div>
    );
  }
}

const myStyles = {
  searchBar: {
    flexDirection: "row",
    flex: 1,
    marginRight: "30%",
    marginLeft: "30%",
    marginBottom: "1.5rem",
  },
  input: {
    width: "60%",
    height: 32,
    fontSize: 20,
    marginBottom: 8,
  },
};

const mapStateToProps = (state) => {
  return {
    item: state.resources,
  };
};

export default ResourceList;
