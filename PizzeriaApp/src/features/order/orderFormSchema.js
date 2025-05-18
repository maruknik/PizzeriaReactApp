import * as Yup from "yup";

export const initialValues = {
  name: "",
  phone: "",
  address: "",
  comment: "",
};

export const validationSchema = Yup.object({
  name: Yup.string().required("Ім’я обов’язкове"),
  phone: Yup.string()
    .matches(/^\+380\d{9}$/, "Введіть коректний номер телефону")
    .required("Телефон обов’язковий"),
  address: Yup.string().required("Адреса обов’язкова"),
});
