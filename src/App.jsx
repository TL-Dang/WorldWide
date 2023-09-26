import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import { CitiesProvider } from './contexts/CitiesContext.component';
import { AuthProvider } from './contexts/FakeAuthContext';
import ProtectedRoute from './pages/ProtectedRoute/ProtectedRoute.component';

import CityList from './components/CityList/CityList.component';
import CountryList from './components/CountryList/CountryList.component';
import City from './components/City/City.component';
import Form from './components/Form/Form.component';
import SpinnerFullPage from './components/SpinnerFullPage/SpinnerFullPage.component';

// import Homepage from './pages/Homepage/Homepage.component';
// import Product from './pages/Product/Product.component';
// import Pricing from './pages/Pricing/Pricing.component';
// import Login from './pages/Login/Login.component';
// import PageNotFound from './pages/PageNotFound/PageNotFound.component';
// import AppLayout from './pages/AppLayout/AppLayout.component';

const Homepage = lazy(() => import('./pages/Homepage/Homepage.component.jsx'));
const Product = lazy(() => import('./pages/Product/Product.component.jsx'));
const Pricing = lazy(() => import('./pages/Pricing/Pricing.component.jsx'));
const Login = lazy(() => import('./pages/Login/Login.component.jsx'));
const AppLayout = lazy(() =>
  import('./pages/AppLayout/AppLayout.component.jsx')
);
const PageNotFound = lazy(() =>
  import('./pages/PageNotFound/PageNotFound.component.jsx')
);

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <Suspense fallback={<SpinnerFullPage />}>
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
        </Suspense>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
