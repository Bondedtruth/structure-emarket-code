import React from 'react';
import { Link } from 'react-router-dom';

const Faq = () => {
  return (
    <div className="flex justify-center align-center w-full h-full bg-gray-500/100 py-2">
      <div className="w-[350px] sm:w-[500px] lg:w-[900px] mx-auto h-full p-4 m-16 z-10 rounded-2xl text-[#FFF] bg-blue-900">
        <div>
          <h1>F A Q (Frequently Asked Questions) </h1>
        </div>
        <br />
        <div>
          <h2>What is FOODSTRUCTURE ?</h2>
        </div>
        <br />
        <div>
          <p>
            Foodouse in your city is exactly what you need. We have come to take
            away the stress of having to doing your grocery shopping yourself.
            With our app you order groceries online and get delivery services
            from stores or markets near you. Give us a trail now. Check it now!
          </p>
        </div>
        <br />
        <div>
          <h2>How do I fund my wallet on FOODSTRUCTURE ?</h2>
        </div>
        <br />
        <div>
          <p>
            You can transfer cash from your mobile bank app to your
            FOODSTRUCTURE wallet after registering on FOODSTRUCTURE. You can
            transfer cash out of your wallet with us but each transfer of funds
            out of your wallet comes with a service charge. You qualify for cash
            rewards when you sign up with 100k marked/ticked for strictly wallet
            app usage.
          </p>
        </div>
        <br />
        <div>
          <h2>What is the Benefit of funding my wallet in FOODSTRUCTURE ?</h2>
        </div>
        <br />
        <div>
          <p>
            If you accept for your funded wallet to be used only for purchase
            with our app, you get a 10% wallet token for signing up with us and
            funding your wallet with us. Fund your wallet and have the option of
            paying out rightly if you are not registered with us under your
            company.
          </p>
        </div>
        <br />
        <div>
          <h2>HOW DO I ORDER FOOD ON FOODSTRUCTURE?</h2>
        </div>
        <br />
        <div>
          <p>
            To place an order, simply go to Foodouse website
            (https://www.foodstructure.com/) or mobile app and register your
            account. You can then select one of the food categories and browse
            our selection of food stuff. Once you decide what you would like to
            have, add your desired items to the cart.
          </p>
        </div>
        <div className="mt-8  text-[#FFF]">
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
              <Link to="/Stores">go to stores page</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faq;
