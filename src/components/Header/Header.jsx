import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
const Header = () => {
  return (
    <header className=" top-0 min-h-[80px] my-0 flex justify-between items-center overflow-hidden bg-stone-900">
      <div>
        <h1>
          <Link to="/" className="uppercase text-white pl-10 text-2xl">
            Lazhopee
          </Link>
        </h1>
      </div>
      <div className="header-links text-white  uppercase text-xl">
        <ul className="flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Product List</Link>
          </li>
          <li>
            <Link to="/shopping-cart" className="cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
