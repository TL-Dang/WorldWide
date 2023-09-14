import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage.component';
import Product from './pages/Product/Product.component';
import Pricing from './pages/Pricing/Pricing.component';
import Login from './pages/Login/Login.component';
import PageNotFound from './pages/PageNotFound/PageNotFound.component';
import AppLayout from './pages/AppLayout/AppLayout.component';
import CityList from './components/CityList/CityList.component';
import CountryList from './components/CountryList/CountryList.component';
import City from './components/City/City.component';
import Form from './components/Form/Form.component';
import { CitiesProvider } from './contexts/CitiesContext.component';
import { AuthProvider } from './contexts/FakeAuthContext';
import ProtectedRoute from './pages/ProtectedRoute/ProtectedRoute.component';

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path='product' element={<Product />} />
            <Route path='pricing' element={<Pricing />} />
            <Route path='login' element={<Login />} />
            <Route
              path='app'
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }>
              <Route index element={<Navigate replace to='cities' />} />
              <Route path='cities' element={<CityList />} />
              <Route path='cities/id' element={<City />} />
              <Route path='countries' element={<CountryList />} />
              <Route path='form' element={<Form />} />
            </Route>
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
