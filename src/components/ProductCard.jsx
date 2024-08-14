import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle adding item to cart and triggering animation
  const handleAddToCart = () => {
    dispatch(addItem(product));
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000); // Reset animation state after 1 second
  };

  return (
    <div className="relative border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Animation for "Added to Cart" message */}
      <motion.div
        className={`absolute top-0 left-0 w-full h-full flex items-center justify-center bg-green-500 text-white text-lg rounded pointer-events-none ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isAnimating ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ zIndex: 1 }} 
      >
        Added to Cart!
      </motion.div>

      {/* Product image */}
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      
      <div className="p-4">
        {/* Product details */}
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-700 mt-1">{product.description}</p>
        <p className="text-lg font-bold mt-1">${product.price.toFixed(2)}</p>

        {/* Add to cart button */}
        <button
          onClick={handleAddToCart}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition-colors duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
