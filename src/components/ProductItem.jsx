import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({
  productnew,
  id,
  imageUrl,
  price,
  title,
  category,
  handleAddProduct,
}) => {
  return (
    <div>
      <Link to={`product/${id}`}>
        <div className="aspect-square p-4 bg-white relative border-solid border-black border-2">
          <img
            src={imageUrl}
            alt="product-image"
            className="w-full h-full object-contain"
          />
          <p className="font-bold p-2 bg-white absolute bottom-4 right-4 border-solid border-black border-2">
            PHP {price}
          </p>
        </div>
        <div>
          <header className="font-bold line-clamp-1">{title}</header>
          <p className="italic text-neutral-600">{category}</p>
        </div>
      </Link>
      <div>
        <button
          className="w-full px-3 py-4 bg-black rounded-md font-bold text-white hover:bg-slate-600 "
          onClick={() => handleAddProduct(productnew)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
