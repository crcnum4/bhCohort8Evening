import React, { Component } from "react";
import { useParams, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Button from "./common/Button";

class ViewCourse extends Component {
  state = {
    showComments: false,
  };

  handleClick = () => {
    this.setState({
      showComments: !this.state.showComments,
    });
  };

  renderComments = (course) => {
    return course.comments.map((comment) => {
      return (
        <div className="box">
          <p>{comment.user}: </p>
          <p>{comment.text}</p>
        </div>
      );
    });
  };

  renderStars = (course) => {
    const rating = course.rating;
    let stars = "";
    for (let i = 0; i < rating; i++) {
      stars += "★ ";
    }
    return stars;
  };

  renderYoutube = (course) => {
    if (course.link.indexOf("youtube") >= 0) {
      const videoIdIndex = course.link.indexOf("?v=");
      const videoId = course.link.substring(videoIdIndex + 3);
      console.log(videoId);
      return (
        <iframe
          title="video"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      );
    }
    // else if(try for youtube share link)
  };

  render() {
    // const { course } = this.props;
    const courseId = parseInt(this.props.match.params.courseId);
    const course = this.props.resources.list.find(
      (item) => item.id === courseId
    );
    console.log(courseId);
    return (
      <div>
        <h3>{course.title}</h3>
        <h4>{course.resourceAuthor}</h4>
        <div style={myStyles.row}>
          <p>Shared by: {course.posterName}</p>
          <p>Cohort: {course.cohort}</p>
        </div>
        <p>{course.summary}</p>
        {this.renderYoutube(course)}
        <div style={myStyles.row}>
          <p>
            <a href={course.link}>View Resource</a>
          </p>
          <p>rating: {this.renderStars(course)}</p>
        </div>
        {course.categories.length ? (
          <div style={myStyles.row}>{course.categories.join(", ")}</div>
        ) : null}
        <Button onClick={this.handleClick} buttonStyle={myStyles.button}>
          {this.state.showComments ? "Hide Comments" : "Show Comments"}
        </Button>
        {this.state.showComments ? this.renderComments(course) : null}
      </div>
    );
  }
}

const myStyles = {
  row: {
    marginRight: "8%",
    marginLeft: "8%",
    display: "flex",
    flexDirection: "row",
    marginTop: "10px",
    marginBottom: "10px",
    selfAlign: "center",
    justifyContent: "space-evenly",
  },
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    height: "100vh",
    width: "80%",
    justifyContent: "flex-start",
    alignItems: "center",
    border: "1px solid blue",
    boxShadow: "5px 3px 5px blue",
    marginTop: 16,
    marginBottom: 16,
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 16,
    paddingBottom: 16,
  },
  button: {
    marginTop: 16,
    backgroundColor: "blue",
    color: "white",
  },
};

const mapStoreToProps = (store) => {
  return {
    resources: store.resources,
  };
};

export default connect(mapStoreToProps)(withRouter(ViewCourse));
