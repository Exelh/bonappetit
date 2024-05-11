import Card from "../Components/Card";
import { fakeRecipes } from "../Components/utils/fakeData";

export const Almuerzo = () => {
    return (
    <div>
      <div className="category-recipes">
      {fakeRecipes
        .filter(recipe => recipe.categoria.includes("almuerzo")) 
        .map((recipe, index) => (
          <Card 
            // key={index}
            title={recipe.nombre} // Título de la receta
            image={recipe.imagenes} // Imagen de la receta
            description={recipe.descripcion} // Descripción
          />
        ))}
      </div>
    </div>
  );
};

export default Almuerzo;
