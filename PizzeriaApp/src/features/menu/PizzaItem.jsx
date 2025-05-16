import React, { useState } from "react";
import { useCart } from "../cart/CartContext";

const PizzaItem = ({ pizza }) => {
  const [size, setSize] = useState("середня");
  const [dough, setDough] = useState("традиційне");
  const [extras, setExtras] = useState([]);
  const { addToCart } = useCart();

  const handleExtraChange = (e) => {
    const { value, checked } = e.target;
    setExtras((prev) =>
      checked ? [...prev, value] : prev.filter((i) => i !== value)
    );
  };

  const basePrice = pizza.prices[size];
  const extraPrice = extras.length * 10;
  const totalPrice = basePrice + extraPrice;

  return (
    <div className="border rounded p-4 shadow-md max-w-sm mx-auto">
      <img
        src={pizza.image}
        alt={pizza.name}
        className="w-full h-48 object-cover rounded mb-3"
      />

      <h3 className="text-lg font-semibold">{pizza.name}</h3>
      <p className="text-sm text-gray-600">{pizza.description}</p>

      <div className="mt-2">
        <label className="block text-sm font-medium">Розмір:</label>
        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="border p-1 rounded"
        >
          {Object.keys(pizza.prices).map((sizeOption) => (
            <option key={sizeOption} value={sizeOption}>
              {sizeOption}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-2">
        <label className="block text-sm font-medium">Тісто:</label>
        <select
          value={dough}
          onChange={(e) => setDough(e.target.value)}
          className="border p-1 rounded"
        >
          <option value="традиційне">Традиційне</option>
          <option value="тонке">Тонке</option>
        </select>
      </div>

      <div className="mt-2">
        <label className="block text-sm font-medium">
          Додаткові інгредієнти (+10 грн):
        </label>
        {pizza.ingredients.map((ing) => (
          <div key={ing}>
            <label>
              <input
                type="checkbox"
                value={ing}
                onChange={handleExtraChange}
              />
              <span className="ml-2">{ing}</span>
            </label>
          </div>
        ))}
      </div>

      <div className="mt-4 font-semibold">
        Ціна: {totalPrice} грн
        <button
          onClick={() =>
            addToCart({
              id: `${pizza.id}-${size}-${dough}-${extras.join(",")}-${Date.now()}`,
              name: pizza.name,
              size,
              dough,
              ingredients: extras,
              price: totalPrice,
            })
          }
          className="ml-4 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          Додати до кошика
        </button>
      </div>
    </div>
  );
};

export default PizzaItem;
