import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, changeQuery } from "../actions";
import Resource from "./Resource";

/*
  in charge of displaying all the resources
  this does not have state because...
*/

class ResourceList extends Component {

  componentDidMount = () => {
    console.log('COMPONENT_MOUNT')
    if (this.props.search.list.length === 0) {
      this.props.changeQuery('', this.props.resources.list)
    }
  }

  handleChange = (e) => {    
    this.props.changeQuery(e.target.value, this.props.resources.list)
  };

  handleClick = () => {
    this.props.increment(this.props.count);
  };

  renderPosts = () => {
    const display = this.props.search.list.map((resource) => {
      return <Resource resource={resource} key={resource.id} />;
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
            value={this.props.search.query}
            onChange={this.handleChange}
          />
        </div>
        <div className="resourceList">{this.renderPosts()}</div>
        <div>
          <button onClick={this.handleClick}>add</button>
          <p>{this.props.count}</p>
        </div>
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

const mapStoreToProps = (store) => {
  return {
    count: store.resources.count,
    resources: store.resources,
    search: store.search
  };
};

export default connect(mapStoreToProps, {
  increment,
  changeQuery
})(ResourceList);
