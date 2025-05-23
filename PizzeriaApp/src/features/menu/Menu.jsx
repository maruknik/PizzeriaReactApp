import React from "react";
import PizzaItem from "./PizzaItem";
import DrinkItem from "./DrinkItem";
import { pizzas } from "../../data/pizzas";
import { drinks } from "../../data/drinks";


const Menu = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">🍕 Піца</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pizzas.map((pizza) => (
          <PizzaItem key={pizza.id} pizza={pizza} />
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">🥤 Напої</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {drinks.map((drink) => (
          <DrinkItem key={drink.id} drink={drink} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
