import React from 'react'

const Card = ({ title, image, description, category }) => {
  const imageUrl = image.length > 0 ? image[0].urlImg : '';

  // Verifica si category es un array antes de mapearlo
  const categoryList = Array.isArray(category) ? category.map((cat) => (
    <span key={cat.id} className="recipe-card-description">{cat.categorias}</span>
  )) : null;

  return (
    <div className='recipe-card'>
      <img src={imageUrl} alt={title} className="recipe-card-image" />
      <h3 className="recipe-card-title">{title}</h3>
      <p className="recipe-card-description">{description}</p>
      {categoryList}
    </div>
  );
};

export default Card;