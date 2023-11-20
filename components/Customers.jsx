import React from 'react';
import { Link } from 'react-router-dom';

const Customers = () => {
  return (
    <div className='flex justify-center align-center w-full h-[100vh] bg-gray-500/100 py-2'>
      <div className="w-[350px] sm:w-[500px] lg:w-[900px] mx-auto h-[600px] p-4 m-16 z-10 rounded-2xl text-[#FFF] bg-blue-900">
            <h1 className='text-4xl text-center'>Customers's Page</h1>
            <div className='p-3'>
            <p className='flex text-2xl'>user: Mike</p>
            <p>wallet ID: 1111</p>
            <p>wallet amount: 5,000</p>
            </div>
            <div className='p-3'>
            <p className='flex text-2xl '>user: James</p>
            <p>wallet ID: 1112</p>
            <p>wallet amount: 3,000</p>
            </div>
            <div className='p-3'>
            <p className='flex text-2xl '>user: John</p>
            <p>wallet ID: 1113</p>
            <p>wallet amount: 10,000</p>
            </div>
            <div className='mt-8 text-[#FFF]'>
                <ul className='flex space-x-4 justify-center'>
                <li className="cursor-pointer  py-2  px-4 hover:underline"><Link Link to='/AddCustomers'>go to add customers page</Link></li>
                    <li className="cursor-pointer  py-2  px-4 hover:text-yellow-500 hover:underline"><Link to='/'>go back to home</Link></li>
                    <li className="cursor-pointer  py-2  px-4 hover:text-yellow-500 hover:underline"><Link to='/AddStores'>go to add stores page</Link></li>
                </ul>
            </div>
        </div>
    </div>
    
    
  );
};

export default Customers;
