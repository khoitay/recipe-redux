import React from 'react'
import './Item.css'

function Item({food}) {
  return (
    <div className="item">
      <div className="item-image" style={{background: `url("${food.strMealThumb}")`, backgroundPosition: "center", backgroundSize: "cover"}}>
        <h3 className="food-header item-title">{food.strMeal}</h3>
      </div>
    </div>
  )
}

export default Item
