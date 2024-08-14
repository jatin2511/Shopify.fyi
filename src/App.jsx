import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './components/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import { useSelector } from 'react-redux';
import { selectCartItems } from './features/cart/cartSelectors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const App = () => {
  // Access cart items from the Redux store
  const cartItems = useSelector(selectCartItems);

  return (
    <Router>
      <div className="relative min-h-screen">

        {/* Header with navigation links and cart icon */}
        <header className="bg-blue-800 text-white p-4 flex justify-between items-center sticky top-0 z-10 shadow-md">
  {/* Logo and app name */}
  <Link to="/" className="text-2xl font-bold flex items-center">
    E-Commerce App
  </Link>

    <Link to="/cart" className="relative">
      <ShoppingCartIcon sx={{ fontSize: 40 }}/>
      {/* Display item count in cart */}
      {cartItems.length > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
          {cartItems.length}
        </span>
      )}
    </Link>
  
</header>


        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />    
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
