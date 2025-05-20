import { useState } from "react";
import { useFormik } from "formik";
import { useCart } from "../cart/CartContext";
import { initialValues, validationSchema } from "./orderFormSchema";
import { Link } from "react-router-dom";

const OrderForm = () => {
  const { cartItems, clearCart } = useCart();
  const [confirmed, setConfirmed] = useState(false);
  const [confirmedData, setConfirmedData] = useState(null);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const orderData = { ...values, cartItems, total };
      console.log("🛒 Нове замовлення оформлено:", orderData);
      setConfirmedData(orderData);
      setConfirmed(true);
      clearCart();
    },
  });

  if (confirmed && confirmedData) {
    return (
      <div className="max-w-xl mx-auto p-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4">✅ Замовлення підтверджено!</h2>
        <p><strong>Імʼя:</strong> {confirmedData.name}</p>
        <p><strong>Телефон:</strong> {confirmedData.phone}</p>
        <p><strong>Адреса:</strong> {confirmedData.address}</p>
        {confirmedData.comment && <p><strong>Коментар:</strong> {confirmedData.comment}</p>}

        <div className="mt-4">
          <h3 className="font-semibold">Ваше замовлення:</h3>
          <ul className="list-disc ml-5">
            {confirmedData.cartItems.map((item) => (
              <li key={item.id}>
                {item.name} × {item.quantity} — {item.price * item.quantity} грн
              </li>
            ))}
          </ul>
          <p className="mt-2 font-bold">Загальна сума: {confirmedData.total} грн</p>
        </div>

        <Link to="/">
          <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Повернутись на головну
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded shadow space-y-6">
      <h2 className="text-2xl font-bold">📦 Оформлення замовлення</h2>

      {cartItems.length > 0 && (
        <div>
          <h3 className="font-semibold mb-2">Ваше замовлення:</h3>
          <ul className="list-disc ml-5 text-sm">
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} × {item.quantity} — {item.price * item.quantity} грн
              </li>
            ))}
          </ul>
          <p className="mt-2 font-bold">Сума: {total} грн</p>
        </div>
      )}

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label>Імʼя:</label>
          <input
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="w-full border p-2 rounded"
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          )}
        </div>

        <div>
          <label>Телефон:</label>
          <input
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            className="w-full border p-2 rounded"
            placeholder="+380..."
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-red-500 text-sm">{formik.errors.phone}</div>
          )}
        </div>

        <div>
          <label>Адреса:</label>
          <input
            name="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            className="w-full border p-2 rounded"
          />
          {formik.touched.address && formik.errors.address && (
            <div className="text-red-500 text-sm">{formik.errors.address}</div>
          )}
        </div>

        <div>
          <label>Коментар:</label>
          <textarea
            name="comment"
            onChange={formik.handleChange}
            value={formik.values.comment}
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Підтвердити замовлення
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
