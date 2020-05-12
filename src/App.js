import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import ResourceList from "./components/ResourceList";
import Navbar from "./components/Navbar";
import ViewCourse from "./components/ViewCourse";
import ResourceForm from "./components/ResourceForm";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ResourceList />
          </Route>
          <Route path="/addResource">
            <ResourceForm />
          </Route>
          <Route path="/viewCourse/:courseId">
            <ViewCourse />
          </Route>
        </Switch>
        <p>Footer</p>
      </div>
    </BrowserRouter>
  );
};

export default App;
