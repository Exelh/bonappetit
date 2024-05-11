import Card from "../Components/Card";
import { fakeRecipes } from "../Components/utils/fakeData";

export const Almuerzo = () => {
  return (
    <div>
      <div className="category-recipes">
        {fakeRecipes.map((recipe, index) => (
          <Card 
            key={index}
            title={recipe.image}
            image={recipe.image} 
            description={recipe.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Almuerzo;
