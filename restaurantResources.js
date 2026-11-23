let personalAPI = API_KEY;

document.querySelector('button').addEventListener('click', getRecipe);

function getRecipe() {
  const userIngredient = document.querySelector('input').value;
  console.log(userIngredient);

  const url = `https://recipeapi.io/api/v1/recipes?apikey=${personalAPI}&ingredients=${userIngredient}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const ingredientStr = [];
      data.data[0].ingredients.map((element) =>
        ingredientStr.push(element.name),
      );
      document.querySelector('h3').innerText = ingredientStr.join(', ');
    });
}
