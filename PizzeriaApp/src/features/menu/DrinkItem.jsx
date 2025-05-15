import React, { useState } from "react";

const DrinkItem = ({ drink }) => {
  const [volume, setVolume] = useState(drink.volume[0]);
  const price = drink.price[volume];

  return (
    <div className="border rounded p-4">
      <h3 className="text-lg font-semibold">{drink.name}</h3>

      <div className="mt-2">
        <label className="block text-sm font-medium">Обʼєм:</label>
        <select
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          className="border p-1 rounded"
        >
          {drink.volume.map((v) => (
            <option key={v} value={v}>
              {v} л
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4 font-semibold">
        Ціна: {price} грн
        <button className="ml-4 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
          Додати до кошика
        </button>
      </div>
    </div>
  );
};

export default DrinkItem;
