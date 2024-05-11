import React from 'react';
import { getRandomElements } from '../Components/utils/randomElements'; // Función para elegir aleatoriamente
import { fakeRecipes } from '../Components/utils/fakeData'; // Datos simulados
import Card from './Card'; // Componente para mostrar cada tarjeta

const Recomendados = () => {
  // Obtén 3 productos aleatorios
  const recommendedProducts = getRandomElements(fakeRecipes, 10);

  return (
    <>
      <h2 className='titulo-recomendados'>Productos recomendados</h2>
      <div className="recommended-section"> {/* Contenedor para la sección de recomendados */}
      
        {recommendedProducts.map((product, id) => (
          
          <Card
            key={id} // Clave única para cada tarjeta
            title={product.nombre} // Título del producto
            image={product.imagenes} // Imagen del producto
            description={product.descripcion} // Descripción
          />
        ))}
      </div>
    </>
  );
};

export default Recomendados;
