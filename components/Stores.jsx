import React from 'react';
import { Link } from 'react-router-dom';

const Stores = () => {
  const storeCards = [
    {
      item: 'iphone',
      description: '15pro max',
      amout: '7000',
      image:
        'https://media.istockphoto.com/id/1731403720/photo/smartphone-with-a-blank-screen-on-a-white-background.jpg?s=612x612&w=0&k=20&c=jzuyU_f6iCSBU3nR1h2BYWVVo1njQYdIf8gL4eoD_mg=',
    },
    {
      item: 'sneakers',
      description: 'Air Jordan',
      amout: '3000',
      image:
        'https://media.istockphoto.com/id/1453810805/photo/running-shoes.jpg?s=612x612&w=0&k=20&c=kMXWxhaXOhJ8pzA_Ntis6D6QoAH4jHbV6DOkOggVIUM=',
    },
    {
      item: 'shirt',
      description: 'Armani Design',
      amout: '2000',
      image:
        'https://media.istockphoto.com/id/622430252/photo/white-gray-and-black-shirt-with-blank-price-tag.jpg?s=612x612&w=0&k=20&c=3-8s8ksew5FT_UyUure32yWPkGubQLYwI0dbVL_2IcI=',
    },
  ];

  return (
    <div className="flex justify-center align-center w-[615px] lg:w-[100%] sm:w-[1200px] mx-auto h-[100vh] bg-gray-500/100 py-2">
      <div className="w-[615px] sm:w-[750px] lg:w-[900px] mx-auto h-[70vh] p-1 m-12 z-10 rounded-2xl text-[#FFF] bg-blue-900">
        <h1 className="text-4xl">Stores Page</h1>
        <div className="p-3">
          <p className="flex space text-2xl ">store: Surulere market</p>
          <p>grocery type: cooking oil</p>
          <p>Market ID: 111</p>
        </div>
        <div className="p-3">
          <p className="flex space text-2xl ">store: Oshodi market</p>
          <p>grocery type: meat</p>
          <p>Market ID: 112</p>
        </div>
        <div className="p-3">
          <p className="flex space text-2xl ">store: Oyingbo market</p>
          <p>grocery type: dry fish</p>
          <p>Market ID: 113</p>
        </div>
        <div className="mt-8 text-[#FFF]">
          <ul className="flex space-x-4 justify-center">
            <li className="cursor-pointer  py-2  px-4 hover:underline">
              <Link Link to="/Customers">
                go to customers page
              </Link>
            </li>
            <li className="cursor-pointer  py-2  px-4 hover:text-yellow-500 hover:underline">
              <Link to="/">go back to home</Link>
            </li>
            <li className="cursor-pointer  py-2  px-4 hover:text-yellow-500 hover:underline">
              <Link to="/AddStores">go to add stores page</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Stores;
