import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ filterResult }) => {
  return (
    <div className="side-bar border-x-4 p-10  flex">
      <div>
        <div className="ml-5 font-bold ">
          <h4>CATEGORIES</h4>
        </div>
        <div>
          <Link to="/">
            <button className="w-full px-3 py-4 rounded-md font-bold hover:bg-slate-600 my-2">
              All Products
            </button>
          </Link>
        </div>
        <Link to="/categories">
          <div>
            <button
              className="w-full px-3 py-4  rounded-md font-bold  hover:bg-slate-600 my-2"
              onClick={() => filterResult("men's clothing")}
            >
              Men's clothing
            </button>
          </div>

          <div>
            <button
              onClick={() => filterResult('jewelery')}
              className="w-full px-3 py-4  rounded-md font-bold  hover:bg-slate-600 my-2"
            >
              Jewelry
            </button>
          </div>
          <div>
            <button
              onClick={() => filterResult('electronics')}
              className="w-full px-3 py-4  rounded-md font-bold  hover:bg-slate-600 my-2"
            >
              Electronics
            </button>
          </div>
          <div>
            <button
              onClick={() => filterResult("women's clothing")}
              className="w-full px-3 py-4  rounded-md font-bold  hover:bg-slate-600 my-2"
            >
              Women's clothing
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
