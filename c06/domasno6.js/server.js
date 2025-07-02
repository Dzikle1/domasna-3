const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

const filePath = path.join(__dirname, 'recipes.json');

app.use(express.json());

// Помошна функција за читање рецепти
function readRecipes() {

  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data || '[]');
}

// ✅ GET - Сите рецепти
app.get('/recipes', (req, res) => {
  const recipes = readRecipes();
  res.json(recipes);
});

// ✅ POST - Додавање рецепт
app.post('/recipes', (req, res) => {
  const recipes = readRecipes();
  const newRecipe = req.body;
  recipes.push(newRecipe);
  fs.writeFileSync(filePath, JSON.stringify(recipes, null, 2));
  res.status(201).json({ message: 'Рецептот е додаден.' });
});

// ✅ PUT - Ажурирање по име
app.put('/recipes/:ime', (req, res) => {
  const recipes = readRecipes();
  const recipeName = req.params.ime;
  const updatedRecipe = req.body;

  const index = recipes.findIndex(r => r.ime.toLowerCase() === recipeName.toLowerCase());
  if (index === -1) {
    return res.status(404).json({ message: 'Рецептот не е најден.' });
  }

  recipes[index] = updatedRecipe;
  fs.writeFileSync(filePath, JSON.stringify(recipes, null, 2));
  res.json({ message: 'Рецептот е ажуриран.' });
});

// ✅ DELETE - Бришење по име
app.delete('/recipes/:ime', (req, res) => {
  const recipes = readRecipes();
  const recipeName = req.params.ime;

  const filtered = recipes.filter(r => r.ime.toLowerCase() !== recipeName.toLowerCase());
  if (filtered.length === recipes.length) {
    return res.status(404).json({ message: 'Рецептот не постои.' });
  }

  fs.writeFileSync(filePath, JSON.stringify(filtered, null, 2));
  res.json({ message: 'Рецептот е избришан.' });
});

app.listen(PORT, () => {
  console.log(`Серверот работи на http://localhost:${PORT}`);
});
