import React from 'react'
import { routes } from './utils/routes'
import { Link } from 'react-router-dom'

const Card = ({ title, image, description, key }) => {
  return (
    <div className='recipe-card'>
      <Link to={`${routes.detail}`}>
        <img src={image} alt={title} className="recipe-card-image" /> {/* Imagen */}
        <h3 className="recipe-card-title">{title}</h3> {/* Título */}
        <p className="recipe-card-description">{description}</p> {/* Descripción */}
      </Link>
    </div>
  )
}

export default Card
