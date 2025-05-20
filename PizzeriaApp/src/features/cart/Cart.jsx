import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";


const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">🛒 Кошик</h2>

      {cartItems.length === 0 ? (
        <p>Кошик порожній.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded shadow flex flex-col sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                {item.size && <p>Розмір: {item.size}</p>}
                {item.dough && <p>Тісто: {item.dough}</p>}
                {item.volume && <p>Обʼєм: {item.volume} л</p>}
                {item.ingredients?.length > 0 && (
                  <p>
                    Інгредієнти: <span className="text-sm">{item.ingredients.join(", ")}</span>
                  </p>
                )}
                <p>Ціна за одиницю: {item.price} грн</p>
              </div>

              <div className="mt-2 sm:mt-0 flex items-center gap-2">
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="border w-16 p-1 rounded text-center"
                />
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  ❌
                </button>
              </div>
            </div>
          ))}

          <div className="text-xl font-bold mt-6">
            Загальна сума: {total} грн
          </div>    
            <Link
              to="/order"
              className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
              Оформити замовлення
            </Link>     
        </div>
      )}
    </div>
  );
};

export default Cart;
