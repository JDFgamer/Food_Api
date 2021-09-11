import React, {useState} from 'react';
import { NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import './Navbar.css';
import { getRecipebyName } from '../../actions/index';
import RecipeOrder from '../filters/recipeorder'



function NavBar({getRecipebyName}) {

  const [ActualState, setActualState] = useState('')



  function handleChange(event) {
    setActualState(event.target.value)
}


function handleClik() {

  getRecipebyName(ActualState)
}



    return (
      <nav >
        <div >
          <NavLink to="/home" >Home</NavLink>
          <NavLink to="/recipe">Create a New Recipe</NavLink>
          <div>
          <input value={ActualState} type='text' placeholder='buscador' onChange={handleChange}/>
          <NavLink to='/recipename'><button onClick={handleClik}>Search</button></NavLink>
          </div>
          <div>
        <RecipeOrder/>
          </div>

        </div>

      </nav>
    );
  };

  const mapStateToProps = (state) => {
    return {
        recipe: state.recipe,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getRecipebyName: name => {
            dispatch(getRecipebyName(name))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)