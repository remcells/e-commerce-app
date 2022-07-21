import React from 'react';
import Header from '../components/Header/Header';

const CartPage = ({ cartItems, handleAddProduct, handleRemoveProduct }) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <div>
      <Header />
      <div className=" w-3/6 mx-auto my-2 bg-blue-200 border-2 border-solid border-black rounded-md">
        <div className="flex flex-1 justify-around items-center h-12 border-b-2 border-solid border-black text-xl font-bold">
          Cart Items
        </div>
        {cartItems.length === 0 && (
          <div className="flex  justify-around items-center text-lg font-black px-1.25">
            No items are added
          </div>
        )}
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-1 items-center pt-5 pb-5 text-md font-bold ml-[5%]"
            >
              <img
                className="w-24 h-auto border-2 border-solid border-black mr-2.5"
                src={item.image}
                alt={item.title}
              />
              <div className="cart-items-name line-clamp-1 w-3/6">
                {item.title}
              </div>
              <div className="cart-items-function w-[20%]">
                <button
                  className="cart-items-add w-7 mr-4 font-black border-none rounded text-lg  cursor-pointer bg-red-600"
                  onClick={() => handleAddProduct(item)}
                >
                  +
                </button>
                <button
                  className="cart-items-remove w-7 mr-4 font-black border-none rounded text-lg bg-green-500 cursor-pointer bg-green"
                  onClick={() => handleRemoveProduct(item)}
                >
                  -
                </button>
              </div>
              <div className="cart-items-price">
                {item.quantity} * {`Php ${item.price}`}
              </div>
            </div>
          ))}
        </div>
        <div className="cart-items-total-price-name flex flex-row-reverse border-2 border-solid border-t-black font-medium">
          <div className="cart-items-total-price flex  px-2 font-bold">
            Php {totalPrice}
          </div>
          Total Price:
        </div>
      </div>
    </div>
  );
};

export default CartPage;
