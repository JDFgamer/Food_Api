import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import RecipesHome from "./components/recipesHome/recipeshome";
import RecipesDetail from "./components/recipesdetails/recipesdetails"
import Home from "./components/Home/home";
import createRecipe from "./components/createRecipe/createrecipe";


function App() {
  return (
   
      <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/recipe" component={createRecipe} />
      <Route exact path="/home" component={RecipesHome} />
      <Route exact path="/recipe/:id"
            render={(match) => (
              <React.Fragment>
               <RecipesDetail match={match}/>
              </React.Fragment>
            )}
          ></Route>
      </Router>  
      
      );
}

export default App;