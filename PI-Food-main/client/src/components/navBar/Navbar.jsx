import React, {useState} from 'react';
import { NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './Navbar.module.css';
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
      <nav className={styles.navbar}>
        <div className={styles.navbar2} >
         <div id={styles.home} > <NavLink to="/home"><button className={styles.btn}><div  className={styles.noselect}>Home</div></button></NavLink><div className={styles.circle}> </div></div>
         <div id ={styles.create_recipe}> <NavLink to="/recipe"><button className={styles.btn_create}><div  className={styles.noselect} >Create a New Recipe</div></button> </NavLink><div className={styles.circle}> </div></div>

          <div className={styles.inputs}><RecipeOrder/> </div>

          <div className={styles.navbar2}>
          <input className={styles.inputbus} value={ActualState} type='text' placeholder='buscador' onChange={handleChange}/>
          <div id ={styles.create_bus}><NavLink to='/recipename'><button className={styles.btn}  onClick={handleClik}> <div className={styles.noselect}> Search</div></button></NavLink> <div className={styles.circle}> </div> </div>
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