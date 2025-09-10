function RecipeCard({ meal }) {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-xl font-semibold mt-2">{meal.strMeal}</h2>
      <a
        href={`https://www.themealdb.com/meal/${meal.idMeal}`}
        target="_self"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline mt-2 block"
      >
        View Recipe
      </a>
    </div>
  );
}

export default RecipeCard;
