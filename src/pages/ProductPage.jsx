import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header/Header';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  const { productId } = useParams();
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();

  // Fetch the data from fakestore API
  // Set it into the state
  const fetchDataFromApi = async () => {
    const { data } = await axios.get(
      'https://fakestoreapi.com/products/' + productId
    );

    const { title, price, description, image } = data;
    setTitle(title);
    setPrice(price);
    setDescription(description);
    setImage(image);
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="flex">
        <div className="aspect-square relative px-5 min-h-[80px]  bg-white mt-8">
          <img
            src={image}
            alt="product-image"
            className=" w-full h-full object-contain border-solid border-black border-2"
          />
        </div>
        <div className="px-5 mt-8 flex flex-col justify-evenly">
          <h1 className="text-xl font-extrabold">{title}</h1>
          <div className="w-3/6 mb-10">
            <p>Price: PHP {price}</p>
            <div className="font-bold mb-5">Product Description:</div>

            <div className="text-justify mb-5">{description}</div>
            <div>
              <Link to="/">
                <button className="w-full px-3 py-4 bg-black rounded-md font-bold text-white hover:bg-slate-600 ">
                  Return to Product List
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
