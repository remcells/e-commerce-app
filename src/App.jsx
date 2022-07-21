import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import NotFoundPage from './pages/NotFoundPage';
import CategorizedPage from './pages/CategorizedPage';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [category, setCategory] = useState([]);

  const handleAddProduct = (product) => {
    const ans = confirm('Add to Cart?');
    if (ans === true) {
      const ProductExist = cartItems.find((item) => item.id === product.id);
      if (ProductExist) {
        setCartItems(
          cartItems.map((item) =>
            item.id === product.id
              ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
              : item
          )
        );
      } else {
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
      }
    }
  };

  const handleRemoveProduct = (product) => {
    const ans = confirm('Remove to Cart?');
    if (ans === true) {
      const ProductExist = cartItems.find((item) => item.id === product.id);
      if (ProductExist.quantity === 1) {
        setCartItems(cartItems.filter((item) => item.id !== product.id));
      } else {
        setCartItems(
          cartItems.map((item) =>
            item.id === product.id
              ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
              : item
          )
        );
      }
    }
  };

  const confirmation = () => {};

  const filterResult = (item) => {
    const result = products.filter((curData) => {
      return curData.category === item;
    });
    setCategory(result);
  };

  const fetchAllProducts = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products/');

    setProducts(data);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/product/:productId"
          element={<ProductPage handleAddProduct={handleAddProduct} />}
        />
        <Route path="*" element={<NotFoundPage />} />

        <Route
          path="/"
          element={
            <ProductListPage
              confirmation={confirmation}
              handleAddProduct={handleAddProduct}
              products={products}
              setProducts={setProducts}
              cartItems={cartItems}
              category={category}
              filterResult={filterResult}
            />
          }
        />
        <Route
          path="/shopping-cart"
          element={
            <CartPage
              cartItems={cartItems}
              products={products}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
            />
          }
        />
        <Route
          path="/categories"
          element={
            <CategorizedPage
              category={category}
              filterResult={filterResult}
              handleAddProduct={handleAddProduct}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
