import React from "react";
import AreaFoodItem from "./AreaFoodItem";
import "./AreaFoods.css";

function AreaFoods({ areaFoods = [] }) {
  return (
    <div className="area-foods">
      {areaFoods.map((item) => {
        return <AreaFoodItem key={item.idMeal} food={item} />;
      })}
    </div>
  );
}

export default AreaFoods;
