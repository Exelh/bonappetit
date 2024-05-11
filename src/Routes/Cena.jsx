import React from 'react';
import { fakeRecipes } from '../Components/utils/fakeData';
import Card from '../Components/Card';
export const Cena = () => {
  return (
    <div className="category-recipes"> {/* Contenedor para las tarjetas */}
            {fakeRecipes
        .filter(recipe => recipe.categoria.includes("cena")) 
        .map((recipe, index) => (
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

export default Cena;
