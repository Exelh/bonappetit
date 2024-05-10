import React from 'react';
import { getRandomElements } from '../Components/utils/randomElements'; // Función para elegir aleatoriamente
import { fakeRecipes } from '../Components/utils/fakeData'; // Datos simulados
import Card from './Card'; // Componente para mostrar cada tarjeta

const Recomendados = () => {
  // Obtén 3 productos aleatorios
  const recommendedProducts = getRandomElements(fakeRecipes, 5);

  return (
    <div className="recommended-section"> {/* Contenedor para la sección de recomendados */}
      {recommendedProducts.map((product, index) => (
        <Card
          key={index} // Clave única para cada tarjeta
          title={product.title} // Título del producto
          image={product.image} // Imagen del producto
          description={product.description} // Descripción
        />
      ))}
    </div>
  );
};

export default Recomendados;
