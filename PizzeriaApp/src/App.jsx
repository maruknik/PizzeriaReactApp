import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Menu from './features/menu/Menu';
import Cart from './features/cart/Cart';
import OrderForm from './features/order/OrderForm';
import './styles/index.css'; 

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<OrderForm />} />
      </Routes>
    </Layout>
  );
}

export default App;