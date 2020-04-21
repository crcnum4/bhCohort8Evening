import React from "react";
import Resource from "./Resource";

const ResourceList = (props) => {
  const renderPosts = () => {
    const display = props.resources.map((resource) => {
      return <Resource resource={resource} key={resource.title} />;
    });

    return display;
  };

  return <div className="resourceList">{renderPosts()}</div>;
};

export default ResourceList;
