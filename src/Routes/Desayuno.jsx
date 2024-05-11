import Card from '../Components/Card';
import { fakeRecipes } from '../Components/utils/fakeData';

export const Desayuno = () => {
  return (
    <div className="category-recipes"> {/* Contenedor para las tarjetas */}
      {fakeRecipes.map((recipe, index) => (
        <Card
          // key={index} // Clave única para cada tarjeta
          title={recipe.nombre} // Título de la receta
          image={recipe.imagenes} // Imagen de la receta
          description={recipe.descripcion} // Descripción
        />
      ))}
    </div>
  );
};

export default Desayuno;
