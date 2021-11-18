import React from 'react'
import { findMealById } from '../APIcontact/mealdb'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Item from './Item'

function AreaFoodItem({food}) {
  const [data, setData] = useState({})

  useEffect(() => {
    findMealById(food.idMeal).then(resp => setData(resp))
  }, [])

  console.log(food.idMeal)

  return (
    <Link to="/detail" state={{name: data.strMeal, id: data.idMeal, image: data.strMealThumb, instructions: data.strInstructions, video: data.strYoutube}} style={{textDecoration: "none"}}>
      <Item food={food} />
    </Link>  
  )
}

export default AreaFoodItem
