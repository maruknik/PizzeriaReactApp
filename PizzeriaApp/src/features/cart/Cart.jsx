 import { useCart } from './CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h2 className="text-xl font-bold">Кошик</h2>
      {cartItems.length === 0 && <p>Кошик порожній</p>}
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="border p-2 my-2">
            <p>{item.name}</p>
            {item.size && <p>Розмір: {item.size}</p>}
            {item.dough && <p>Тісто: {item.dough}</p>}
            {item.ingredients?.length > 0 && <p>Інгредієнти: {item.ingredients.join(', ')}</p>}
            <p>Ціна: {item.price} грн</p>
            <button onClick={() => removeFromCart(item.id)}>Видалити</button>
          </li>
        ))}
      </ul>
      {cartItems.length > 0 && (
        <button onClick={clearCart} className="mt-4 bg-red-500 text-white px-4 py-2">Очистити кошик</button>
      )}
    </div>
  );
};

export default Cart;