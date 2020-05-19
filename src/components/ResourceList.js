import React from "react";
import { connect } from "react-redux";
import { increment, changeQuery } from "../actions";
import Resource from "./Resource";

/*
  in charge of displaying all the resources
  this does not have state because...
*/

const ResourceList = (props) => {

  const handleChange = (e) => {
    props.changeQuery(e.target.value, props.resources.list)
  };

  const handleClick = () => {
    props.increment(props.count);
  };

  const renderPosts = () => {
    const display = props.search.list.map((resource) => {
      return <Resource resource={resource} key={resource.id} />;
    });

    return display;
  };

  return (
    <div>
      {/* TODO: add search bar */}
      <div style={myStyles.searchBar}>
        <input
          style={myStyles.input}
          type="text"
          placeholder="🔍 Search Titles"
          value={props.search.query}
          onChange={handleChange}
        />
      </div>
      <div className="resourceList">{renderPosts()}</div>
      <div>
        <button onClick={handleClick}>add</button>
        <p>{props.count}</p>
      </div>
    </div>
  );
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
