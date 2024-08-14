import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import { selectCartTotal } from '../features/cart/cartSelectors';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const cartTotal = useSelector(selectCartTotal);

  // Handle the checkout process by clearing the cart
  const handleCheckout = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-4">
      {/* Page title */}
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
      {/* Display the total amount of the cart */}
      <p className="text-lg mb-4">Total: ${cartTotal.toFixed(2)}</p>
      {/* Button to complete the purchase and clear the cart */}
      <button
        onClick={handleCheckout}
        className="px-4 py-2 mx-2 bg-green-500 text-white rounded"
      >
        Complete Purchase
      </button>
      {/* Link to navigate back to the home page */}
      <Link to="/">
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default CheckoutPage;
