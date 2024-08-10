// src/App.jsx

import './App.css';
import { useState } from 'react';
import BurgerStack from './components/BurgerStack';
import IngredientList from './components/IngredientList';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const generateUniqueKey = () => Math.random().toString(36).slice(2, 9);

  const addIngredient = (ingredient) => {
    const newIngredient = {...ingredient, key : generateUniqueKey() }
    setSelectedIngredients([...selectedIngredients, newIngredient]);
  };
  const removeIngredient = (ingredientToRemove) => {
    const updatedSelectedIngredients = selectedIngredients.filter(
      (ingredient) => ingredient.key !== ingredientToRemove.key
    );
    setSelectedIngredients(updatedSelectedIngredients);
  };
  return (
    <>
      <h1>Burger Stacker</h1>
      <div className="app-container">
        <div className="column">
          <h2>Available Ingredients</h2>
          <BurgerStack ingredients={availableIngredients} addIngredient={addIngredient} />
        </div>
        <div className="column">
          <h2>Selected Ingredients</h2>
          <IngredientList selectedIngredients={selectedIngredients} removeIngredient={removeIngredient} />
        </div>
      </div>
    </>
  );
};

export default App;