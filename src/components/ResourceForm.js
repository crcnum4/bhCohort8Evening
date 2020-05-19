import React from "react";
import { connect } from "react-redux";
import { changeForm, submitForm } from "../actions";
import Button from "./common/Button";

const ResourceForm = (props) => {
  const { form } = props.newResource;
  const handleChange = (e) => {
    props.changeForm(e.target.id, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // any data manipulation and validation

    props.submitForm(props.newResource.form);
  };

  return (
    <div className="ResourceForm">
      <form style={styles.form} onSubmit={handleSubmit}>
        {/* <label htmlFor="posterName">Your Name: </label> */}
        <input
          style={styles.input}
          id="posterName"
          type="text"
          placeholder="Your Name"
          value={form.posterName}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          id="resourceAuthor"
          type="text"
          placeholder="Resource Author"
          value={form.resourceAuthor}
          onChange={handleChange}
        />
        <select
          style={styles.input}
          id="authorSkillLevel"
          value={form.authorSkillLevel}
          onChange={handleChange}
        >
          <option value="" disabled>
            Author skill level
          </option>
          <option value="Intro">Intro</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        <input
          style={styles.input}
          id="cohort"
          type="text"
          placeholder="Cohort #"
          value={form.cohort}
          onChange={handleChange}
        />
        <input
          style={styles.input}
          id="title"
          type="text"
          placeholder="Resource Title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          style={styles.input}
          type="text"
          id="categories"
          placeholder="Categories (seperate multiples with commas)"
          value={form.categories}
          onChange={(e) => handleChange(e)}
        />
        <input
          style={styles.input}
          type="text"
          id="link"
          placeholder="Resource Link"
          value={form.link}
          onChange={(e) => handleChange(e)}
        />
        <input
          style={styles.input}
          type="text"
          id="resourceType"
          placeholder="Resource Type"
          value={form.resourceType}
          onChange={(e) => handleChange(e)}
        />
        <input
          style={styles.input}
          type="date"
          id="datePublished"
          placeholder="Published Date"
          value={form.datePublished}
          onChange={(e) => handleChange(e)}
        />
        <input
          style={styles.input}
          type="text"
          id="videoLength"
          placeholder="Length of Video (optional)"
          value={form.videoLength}
          onChange={(e) => handleChange(e)}
        />
        <input
          style={styles.input}
          type="text"
          id="timeToComplete"
          placeholder="Time to complete resource"
          value={form.timeToComplete}
          onChange={(e) => handleChange(e)}
        />
        <input
          style={styles.input}
          type="number"
          id="rating"
          placeholder="1 to 5 rating"
          value={form.rating}
          onChange={(e) => handleChange(e)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

const styles = {
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "20%",
    marginLeft: "20%",
    flexDirection: "column",
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
    newResource: store.newResource,
  };
};

const mapActionsToProps = () => {
  return {
    changeForm,
    submitForm,
  };
};

export default connect(mapStoreToProps, mapActionsToProps())(ResourceForm);
