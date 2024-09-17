import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './Pages/Auth/Signin';
import SignUp from './Pages/Auth/Signup';
import Carts from './Pages/Carts';
import Home from './Pages/Home';
import Products from './Pages/Products';
import ProductsDetails from './Pages/ProductDetails';
import Orders from './Pages/Orders';
import Auth from './Pages/Auth/Auth';
import Dashboard from './Pages/Dashboard';



function App() {
  


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/auth">
          <Route index element={<Auth />} />
          <Route path="Signin" element={<SignIn />} />
          <Route path="Signup" element={<SignUp />} />
        </Route>

        {/* Nested routes for Dashboard */}
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Product/:id" element={<ProductsDetails />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Carts" element={<Carts />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
