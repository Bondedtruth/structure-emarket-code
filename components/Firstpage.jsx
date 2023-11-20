import React from 'react';
import { Link } from 'react-router-dom';

const Firstpage = () => {
  return (
    <div className="flex justify-center align-center w-full h-[100vh] bg-gray-500/100 py-2">
      <div className="w-[350px] sm:w-[500px] lg:w-[900px] mx-auto h-[500px] p-4 m-16 z-10 rounded-2xl text-[#FFF] bg-blue-900">
        <h1 className="p-8 flex justify-center">
          Welcome to a test structure for an e-market with wallet purchase.
        </h1>
        <div className="flex mt-[50px] justify-center items-center text-center">
          <ul>
            <li className="cursor-pointer  py-4  px-4 hover:underline">
              <Link to="Customers">
                <h1 className="text-4xl hover:text-yellow-500 hover:underline">
                  CUSTOMERS
                </h1>
              </Link>
            </li>
            <li className="cursor-pointer  py-4  px-4 hover:underline">
              <Link to="Stores">
                <h1 className="text-4xl hover:text-yellow-500 hover:underline">
                  STORES
                </h1>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex mt-[50px] justify-center items-center text-center">
          <ul>
            <li className="cursor-pointer  py-4  px-4 hover:underline">
              <Link to="Faq">
                <h1 className="text-3xl hover:text-yellow-500 hover:underline">
                  FAQ
                </h1>
              </Link>
            </li>
            <li className="cursor-pointer  py-4  px-4 hover:underline">
              <Link to="#">
                <h1 className="text-l">Powered by Foodouse Inc. 2023</h1>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Firstpage;
