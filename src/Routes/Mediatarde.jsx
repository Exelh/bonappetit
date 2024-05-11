import React from 'react';
import { fakeRecipes } from "../Components/utils/fakeData";
import Card from '../Components/Card';
export const Mediatarde = () => {
  return (
    <div>
      <div className="category-recipes">
      {fakeRecipes
        .filter(recipe => recipe.categoria.includes("merienda")) 
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

export default Mediatarde;
