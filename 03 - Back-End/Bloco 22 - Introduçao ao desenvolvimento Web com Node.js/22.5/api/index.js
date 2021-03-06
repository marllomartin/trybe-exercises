const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./auth-middleware');

const app = express();
app.use(bodyParser.json());

app.get('/open', function (req, res) {
  res.send('open!')
});

app.use(authMiddleware);

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

// validateName Middleware
function validateName(req, res, next) {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!' });

  next();
};

// validatePrice Middleware
function validatePrice(req, res, next) {
  const { price } = req.body;
  if (price < 0 || typeof price !== 'number') return res.status(400).json({ message: 'Invalid data!' });

  next();
};

// GET Recipes by name and price
app.get('/recipes/search', function (req, res) {
  const { name, minPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price > parseInt(minPrice));

  res.status(200).json(filteredRecipes);
})

// GET All Recipes
app.get('/recipes', function (req, res) {
  return res.json(recipes);
});

// GET One Recipe by ID
app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!' });

  return res.status(200).json(recipe);
});

// PUT Recipe by ID - Edit Recipe by ID
app.put('/recipes/:id', validateName, validatePrice, function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

// POST Recipe - Create Recipe
app.post('/recipes', validateName, validatePrice, function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price });
  res.status(201).json({ message: 'Recipe created successfully!' });
});

// DELETE Recipe by ID
app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

// GET Drinks by name and price
app.get('/drinks/search', function (req, res) {
  const { name, minPrice } = req.query;
  const filteredDrinks = drinks.filter((d) => d.name.includes(name) && d.price > parseInt(minPrice));

  res.status(200).json(filteredDrinks);
})

// GET All Drinks
app.get('/drinks', function (req, res) {
  return res.json(drinks);
});

// GET One Drink by ID
app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((d) => d.id === parseInt(id));

  if (!drink) return res.status(404).json({ message: 'Drink not found!' });

  return res.status(200).json(drink);
});

// PUT Drink by ID - Edit Drink by ID
app.put('/drinks/:id', validateName, validatePrice, function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinkIndex = drinks.findIndex((d) => d.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };

  res.status(204).end();
});

// POST Drink - Create Drink
app.post('/drinks', validateName, validatePrice, function (req, res, next) {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  res.status(201).json({ message: 'Drink created successfully!' });
});

// DELETE Drink by ID
app.delete('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex((d) => d.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  drinks.splice(drinkIndex, 1);

  return res.status(204).end();
});

// GET Valid Token
app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({ message: 'Invalid Token!' });

  res.status(200).json({ message: 'Valid Token!' });
});

// LISTEN to port 3001
app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
