const express = require('express');
const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

// Search Recipes by name and price
app.get('/recipes/search', function (req, res) {
  const { name, minPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price > parseInt(minPrice));

  res.status(200).json(filteredRecipes);
})

// Search Drinks by name and price
app.get('/drinks/search', function (req, res) {
  const { name, minPrice } = req.query;
  const filteredDrinks = drinks.filter((d) => d.name.includes(name) && d.price > parseInt(minPrice));

  res.status(200).json(filteredDrinks);
})

// List All Recipes
app.get('/recipes', function (req, res) {
  return res.json(recipes);
});

// List One Recipe by ID
app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  return res.status(200).json(recipe);
});

// List All Drinks
app.get('/drinks', function (req, res) {
  return res.json(drinks);
});

// List One Drink by ID
app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((d) => d.id === parseInt(id));

  if (!drink) return res.status(404).json({ message: 'Drink not found!'});

  return res.status(200).json(drink);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
