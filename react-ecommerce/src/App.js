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
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;