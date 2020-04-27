import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
//react router makes it easier to route different urls to different react components

import Navbar from "./components/navbar.component"
import ExcercisesList from "./components/exercise-list.component";
import EditExcercise from "./components/edit-exercise.component";
import CreateExcercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar/>
      <br/>
      <Route path="/" exact component={ExcercisesList}/>
      <Route path="/edit/:id" component={EditExcercise}/>
      <Route path ="/create" component={CreateExcercise}/>
      <Route path="/user" component={CreateUser}/>
      </div>
    </Router>
  );
}

export default App;
//http://192.168.56.1:3000/
//nodemon node_modules/react-scripts/scripts/start.js
