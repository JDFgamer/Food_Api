import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import RecipesHome from "./components/recipesHome/recipeshome";
import Home from "./components/Home/home";


function App() {
  return (
   
      <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={RecipesHome} />
      </Router>  
      
      );
}

export default App;