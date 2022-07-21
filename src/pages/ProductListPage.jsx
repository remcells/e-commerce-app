import React from 'react';
import ProductItem from '../components/ProductItem';
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar';

const ProductListPage = ({
  confirmation,
  products,
  cartItems,
  handleAddProduct,
  filterResult,
}) => {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="flex">
        <SideBar filterResult={filterResult} />
        <section className="px-5 min-h-[80px] ml-4/5 mx-auto my-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {products.map((productnew) => (
            <ProductItem
              confirmation={confirmation}
              productnew={productnew}
              handleAddProduct={handleAddProduct}
              cartItems={cartItems}
              id={productnew.id}
              key={productnew.id}
              imageUrl={productnew.image}
              price={productnew.price}
              title={productnew.title}
              category={productnew.category}
            ></ProductItem>
          ))}
        </section>
      </div>
    </main>
  );
};

export default ProductListPage;
