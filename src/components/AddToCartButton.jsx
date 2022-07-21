import React from 'react';

const AddToCartButton = ({ productnewc, handleAddProduct }) => {
  return (
    <button
      className="w-full px-3 py-4 bg-black rounded-md font-bold text-white hover:bg-slate-600  "
      onClick={() => handleAddProduct(productnewc)}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
