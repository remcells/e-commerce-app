import React from 'react';
import SideBar from '../components/SideBar';
import Header from '../components/Header/Header';
import { Link } from 'react-router-dom';
import AddToCartButton from '../components/AddToCartButton';

const CategorizedPage = ({ category, filterResult, handleAddProduct }) => {
  return (
    <div>
      <Header />
      <div className="page flex">
        <SideBar filterResult={filterResult}></SideBar>
        <section className="px-5 min-h-[80px] ml-4/5 mx-auto my-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {category.map((productnewc) => (
            <div key={productnewc.id}>
              <Link to={`product/${productnewc.id}`}>
                <div className="aspect-square p-4 bg-white relative border-solid border-black border-2 ">
                  <img
                    src={productnewc.image}
                    alt="product-image"
                    className="w-full h-full object-contain"
                  />
                  <p className="font-bold p-2 bg-white absolute bottom-4 right-4">
                    PHP {productnewc.price}
                  </p>
                </div>
                <div>
                  <header className="font-bold line-clamp-1">
                    {productnewc.title}
                  </header>
                  <p className="italic text-slate-500">
                    {productnewc.category}
                  </p>
                </div>
              </Link>
              <AddToCartButton
                handleAddProduct={handleAddProduct}
                productnewc={productnewc}
              />
              {/* <div>
                <button
                  className="w-full px-3 py-4 bg-slate-500 rounded-md font-bold text-white hover:bg-slate-600"
                  onClick={() => handleAddProduct(productnew)}
                >
                  Add to Cart
                </button>
              </div> */}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default CategorizedPage;
