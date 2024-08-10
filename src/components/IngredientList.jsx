const IngredientList = ({ selectedIngredients, removeIngredient }) => {
  return (
    <div>
      <ul>
        {selectedIngredients.map((ingredient) => (
          <li key={ingredient.key} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button className="btn" onClick={() => removeIngredient(ingredient)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
