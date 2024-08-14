import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity, applyDiscount } from '../features/cart/cartSlice';
import { selectCartItems, selectCartTotal } from '../features/cart/cartSelectors';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [discount, setDiscount] = useState(0);

  // Handle quantity change for a specific item
  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  // Handle discount input change and dispatch action
  const handleDiscountChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setDiscount(value);
    dispatch(applyDiscount(value));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
      
      {/* Message if cart is empty */}
      {cartItems.length === 0 && <p className="text-gray-600">Your cart is empty.</p>}
      
      {/* Render each cart item */}
      {cartItems.map(item => (
        <div key={item.id} className="flex items-center border-b py-4">
          <img src={item.image} alt={item.name} className="w-24 h-24 md:w-32 md:h-32 object-cover" />
          <div className="ml-4 flex-1">
            {/* Item details */}
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600">${item.price.toFixed(2)}</p>
            
            {/* Quantity controls */}
            <div className="flex items-center mt-2">
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                className="px-2 py-1 bg-gray-300 text-gray-700 rounded"
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                className="mx-2 w-12 text-center border rounded"
              />
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                className="px-2 py-1 bg-gray-300 text-gray-700 rounded"
              >
                +
              </button>
              
              {/* Remove item button */}
              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="ml-4 px-4 py-2 bg-red-600 text-white rounded shadow hover:bg-red-700 transition-colors duration-300"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
      
      {/* Discount input and total */}
      <div className="mt-4">
        <label className="block mb-2 text-lg font-semibold">Discount:</label>
        <input
          type="number"
          value={discount}
          onChange={handleDiscountChange}
          placeholder="Enter discount amount"
          className="p-2 border rounded"
        />
        <h2 className="text-xl font-semibold mt-2">Total: ${cartTotal.toFixed(2)}</h2>
        <Link to="/checkout">
          <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700 transition-colors duration-300">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
