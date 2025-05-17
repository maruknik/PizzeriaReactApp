import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-yellow-500">Меню</Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-yellow-500">Кошик</Link>
            </li>
            <li>
              <Link to="/order" className="hover:text-yellow-500">Замовлення</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;