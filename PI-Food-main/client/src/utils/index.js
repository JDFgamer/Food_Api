export async function RecipeOrder(orderTarget, receta) {

  let recetaordenada
  if (receta.title === 'Ascendent')
      recetaordenada = orderTarget.sort((a, b) => (
          a.title > b.title ? 1 : a.title < b.title ? -1 : 0),
      )

  if (receta.title === 'Descendent')
      recetaordenada = orderTarget.sort((a, b) => (
          a.title < b.title ? 1 : a.title > b.title ? -1 : 0),
      )

  if (receta.score === 'Ascendent')
      recetaordenada = orderTarget.sort((a, b) => (
          a.score > b.score ? 1 : a.score < b.score ? -1 : 0),
      )

  if (receta.score === 'Descendent')
      recetaordenada = orderTarget.sort((a, b) => (
          a.score < b.score ? 1 : a.score > b.score ? -1 : 0),
      )

  return recetaordenada;

}

export async function filterRecipeDiet(orderTarget, receta) {
  let recetafiltrada;

    if (receta.diets){
      recetafiltrada = orderTarget.filter((recipe) =>
      recipe.diets.filter((diet) => diet.name === receta.diets).length)
      }

  return recetafiltrada;

  }



export function validate(input) {
  let errors = {}
  if (!input.score) {
    errors.score = 'a score is required'
  } else if (/^[0-100]$/.test(input.score)) {
    errors.score = 'You only have to enter numbers from 0 to 100'
  };
  if (!input.title) {
    errors.title = 'Title is required'
  };
  if (!input.summary) {
    errors.summary = 'Summary is required'
  };
  if (!input.healthyness) {
    errors.healthyness = 'Healthyness is required'
  } else if (/^[0-100]$/.test(input.healthyness)) {
    errors.healthyness = 'You only have to enter numbers from 0 to 100'
  }
  if (!input.steps) {
    errors.steps = 'Steps is required'
  }
  if (!input.diets) {
    errors.diets = 'Diets is required'
  }
  return errors
}