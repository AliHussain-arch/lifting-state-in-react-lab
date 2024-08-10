const IngredientList = ({ selectedIngredients, removeIngredient }) => {
  return (
    <div>
      <h2>Selected Ingredients</h2>
      <ul>
        {selectedIngredients.map((ingredient) => (
          <li key={ingredient.key} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => removeIngredient(ingredient)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
