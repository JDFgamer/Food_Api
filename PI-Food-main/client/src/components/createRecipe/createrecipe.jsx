import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { CreateRecipe, getRecipes, getByDiet } from "../../actions/index"
import { validate } from "../../utils"
import styles from './createrecipe.module.css'


function RecipeCreate({ recipes, diets, postcreaterecipe, getallrecipes, getByDiet }) {


    const [input, setInput] = useState({
        title: "",
        summary: "",
        steps: "",
        healthyness: "",
        score: "",
        diets: [],
    });
    const [errors, setErrors] = useState({
        title: "",
        summary: "",
        steps: "",
        healthyness: "",
        score: "",
        diets: "",
    })
    const history = useHistory()

    useEffect(() => {
        getallrecipes()
        getByDiet()
    }, [])





    function handleInputChange(event) {
        setErrors(validate({
            ...input,
            [event.target.name]: event.target.value
        }))
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })

    }


    function handleDietsSelection(event) {
        if (event.target.value === "") {
            setErrors({
                ...errors,
                diets: "You must choose one or more diets"
            });
            return;
        }

        setErrors({
            ...errors,
            diets: ""
        });
        const dietsExists = input.diets.find(
            (item) => item === event.target.value
        );

        if (!dietsExists) {

            setInput({
                ...input,
                diets: [...input.diets, event.target.value],
            });
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        postcreaterecipe(input)
        alert('The new recipe has been created')
        getallrecipes()
        setTimeout( () => {history.push('/home')},1500)
    }

    function onClickSubmit() {
        if (!input.title || !input.summary || !input.diets || !input.steps || !input.healthyness || !input.score) {
            alert('You must complete all the fields')
        } else {
            alert('The recipe was successfully created')
        }
    }


    return (

<div>
    <Link to="/home"> <button id={styles.btn} ><div id={styles.noselect} > home </div></button><div id={styles.circle}></div>  </Link>
        <div className={styles.card}>
            <div className={styles.text}>Title</div>
            <input className={styles.input} type="text" name='title' value={input.title} onChange={handleInputChange}  />
            {errors.title && (<p className={styles.error} >{errors.title}</p>)}
            <form onSubmit={handleSubmit}>

                <div>
                <div className={styles.text}>Summary</div>
                    <input className={styles.input} type="text" name="summary" value={input.summary} onChange={handleInputChange} /> 
                    {errors.summary && (<p className={styles.error} >{errors.summary}</p>)}
                </div>

                <div>
                <div className={styles.text}>Healthyness</div>
                    <input className={styles.input} type="number" name="healthyness" value={input.healthyness} onChange={handleInputChange}  />
                    {errors.healthyness && (<p className={styles.error} >{errors.healthyness}</p>)}
                </div>

                <div>
                <div className={styles.text}>Score</div>
                    <input className={styles.input} type="number" name="score" value={input.score} onChange={handleInputChange}  />
                    {errors.score && (<p className={styles.error} >{errors.score}</p>)}
                </div>

                <div>
                <div className={styles.text}>Steps</div>
                    <input id={styles.steps} type="text" name="steps" value={input.steps} onChange={handleInputChange}  />
                    {errors.steps && (<p className={styles.error} >{errors.steps}</p>)}
                </div>
                
                <div className={styles.text}>Diets</div>
                <select id={styles.diets} onChange={handleDietsSelection}>
                    <option value=''>Select a diets</option>
                    {
                        diets?.map((item, i) => {
                            return <option value={item.name} key={i} >{item.name}</option>;
                        })
                    }
                </select>
                <input className={styles.input} type="text" name="diets" value={input.diets} onChange={onClickSubmit}  />
                {errors.diets && (
                    <p>{errors.diets}</p>
                )}
                <input id={styles.input} type="submit" value='Create a new recipe' />
            </form>
        </div>
        </div>

    )

}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes,
        diets: state.diets
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postcreaterecipe: (recipe) => dispatch(CreateRecipe(recipe)),
        getallrecipes: () => dispatch(getRecipes()),
        getByDiet: () => dispatch(getByDiet())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeCreate)