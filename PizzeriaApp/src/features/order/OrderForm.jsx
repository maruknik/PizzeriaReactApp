import React, { useState } from "react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./orderFormSchema";

const OrderForm = () => {
  const [confirmed, setConfirmed] = useState(false);

  
const formik = useFormik({
  initialValues,
  validationSchema,
  onSubmit: (values) => {
    console.log("Дані замовлення:", values);
    setConfirmed(true);
  },
});

  if (confirmed) {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold text-green-600">Замовлення підтверджено!</h2>
        <p>Дякуємо за ваше замовлення, {formik.values.name}.</p>
      </div>
    );
  }

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4 p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Оформити замовлення</h2>

      <div>
        <label className="block">Ім’я *</label>
        <input
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className="border rounded w-full p-2"
        />
        {formik.touched.name && formik.errors.name && (
          <div className="text-red-500 text-sm">{formik.errors.name}</div>
        )}
      </div>

      <div>
        <label className="block">Телефон *</label>
        <input
          name="phone"
          type="tel"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          className="border rounded w-full p-2"
          placeholder="+380..."
        />
        {formik.touched.phone && formik.errors.phone && (
          <div className="text-red-500 text-sm">{formik.errors.phone}</div>
        )}
      </div>

      <div>
        <label className="block">Адреса доставки *</label>
        <input
          name="address"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
          className="border rounded w-full p-2"
        />
        {formik.touched.address && formik.errors.address && (
          <div className="text-red-500 text-sm">{formik.errors.address}</div>
        )}
      </div>

      <div>
        <label className="block">Коментар</label>
        <textarea
          name="comment"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.comment}
          className="border rounded w-full p-2"
        />
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
      >
        Підтвердити замовлення
      </button>
    </form>
  );
};

export default OrderForm;
