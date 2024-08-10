// `src/components/BurgerStack.jsx`
const BurgerStack = ({ ingredients, addIngredient }) => {
  return (
    <div>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.name} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button className="btn" onClick={() => addIngredient(ingredient)}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerStack;
