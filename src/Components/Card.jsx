import React from 'react'

const Card = ({ title, image, description }) => {
  return (
    <div className='recipe-card'>
      <img src={image} alt={title} className="recipe-card-image" /> {/* Imagen */}
      <h3 className="recipe-card-title">{title}</h3> {/* Título */}
      <p className="recipe-card-description">{description}</p> {/* Descripción */}
    </div>
  )
}

export default Card
