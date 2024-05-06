import { Counter } from './features/counter/Counter';
import './App.css';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import Home from './features/Pages/Home';
import LoginPage from './features/Pages/LoginPage';
import SignupPage from './features/Pages/SignupPage';
import Cart from './features/cart/Cart';
import CartPage from './features/Pages/CartPage';
import Checkout from './features/Pages/Checkout';
import ProductDetailPage from './features/Pages/ProductDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/login',
    element: <LoginPage/>,
  },
  {
    path: '/signup',
    element: <SignupPage/>,
  },
  {
    path: '/cart',
    element: <CartPage/>,
  },
  {
    path: '/checkout',
    element:  <Checkout/>  ,
  },
  {
    path: '/product-detail',
    element: <ProductDetailPage/>  ,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;