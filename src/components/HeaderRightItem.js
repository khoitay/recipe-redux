import React from "react";
import { getRandomMeal } from '../APIcontact/mealdb'
import './HeaderRightItem.css'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function HeaderRightItem() {
  const [randomFood, setRandomFood] = useState({});

  useEffect(() => {
    RandomMeal();
  }, []);

  async function RandomMeal() {
    const data = await getRandomMeal();
    setRandomFood(data);
  }

  return (
    <Link to="/detail" style={{textDecoration: 'none'}} state={{id: randomFood.idMeal,name: randomFood.strMeal, image: randomFood.strMealThumb, instructions: randomFood.strInstructions, video: randomFood.strYoutube}}>
      <div className="headerRight-item">
        <div className="headerRight-item-image">
          <img className="banner-img" src={randomFood.strMealThumb} alt="" />
        </div>
        <h3>{randomFood.strMeal}</h3>
        <p style={{height: "100px", overflow:"hidden", textAlign:"justify", color: "rgb(117,117,117)"}}>{randomFood.strInstructions}</p>
      </div>  
    </Link>
  )
}

export default HeaderRightItem;
