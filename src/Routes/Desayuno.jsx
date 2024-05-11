import Card from '../Components/Card';
import { fakeRecipes } from '../Components/utils/fakeData';

const Desayuno = () => {
  return (
    <div className="category-recipes"> {/* Contenedor para las tarjetas */}
      {fakeRecipes.map((recipe, index) => (
        <Card
          key={index} // Clave única para cada tarjeta
          title={recipe.title} // Título de la receta
          image={recipe.image} // Imagen de la receta
          description={recipe.description} // Descripción
        />
      ))}
    </div>
  );
};

export default Desayuno;
