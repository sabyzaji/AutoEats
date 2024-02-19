import React from "react";
import FoodData from "../data/FoodData";
import ListedMenuCard from "../layouts/listedMenu";

const FoodMenu = () => {
  return (
    <div>
      {FoodData.map((food) => (
        <div key={food.id}>
          <img src={food.img} alt={food.name} />
          <h2>{food.name}</h2>
          <p>{food.desc}</p>
          <p>Price: ${food.price}</p>
          <p>Rating: {food.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default FoodMenu;
