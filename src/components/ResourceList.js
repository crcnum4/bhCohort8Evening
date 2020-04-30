import React from "react";
import Resource from "./Resource";

/*
  in charge of displaying all the resources
  this does not have state because...
*/

const ResourceList = (props) => {
  const renderPosts = () => {
    const display = props.resources.map((resource) => {
      return (
        <Resource
          resource={resource}
          key={resource.id}
          onSelect={props.onSelect}
        />
      );
    });

    return display;
  };

  return <div className="resourceList">{renderPosts()}</div>;
};

export default ResourceList;
