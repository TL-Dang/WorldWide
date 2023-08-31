import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage.component';
import Product from './pages/Product/Product.component';
import Pricing from './pages/Pricing/Pricing.component';
import Login from './pages/PageNotFound/PageNotFound.component';
import PageNotFound from './pages/PageNotFound/PageNotFound.component';
import AppLayout from './pages/AppLayout/AppLayout.component';
import CityList from './components/CityList/CityList.component';
import CountryList from './components/CountryList/CountryList.component';
import City from './components/City/City.component';
import Form from './components/Form/Form.component';

const BASE_URL = 'http://localhost:8000';

function App() {
  const [cities, setCitites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCitites(data);
      } catch {
        alert('There was an error loading data . . .');
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='product' element={<Product />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='login' element={<Login />} />
        <Route path='app' element={<AppLayout />}>
          <Route
            index
            element={<Navigate replace to='cities' />}
          />
          <Route
            path='cities'
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path='cities/id' element={<City />} />
          <Route path='countries' element={<p>Countries</p>} />
          <Route path='form' element={<Form />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
