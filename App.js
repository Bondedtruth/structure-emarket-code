import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Firstpage from './components/Firstpage';
import Nopage from './components/Nopage';
import Stores from './components/Stores';
import Customers from './components/Customers';
import AddCustomers from './components/AddCustomers';
import AddStores from './components/AddStores';
import Faq from './components/Faq';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Firstpage />} />
          <Route path="/home" element={<Firstpage />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/addcustomers" element={<AddCustomers />} />
          <Route path="/addstores" element={<AddStores />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
