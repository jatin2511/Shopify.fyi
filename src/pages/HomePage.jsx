import React from 'react';
import ProductList from '../components/ProductList';
import productsData from '../assets/products.json';

const HomePage = () => {
  return (
    <div className="p-4">
      {/* Page title */}
      <h1 className="text-2xl font-semibold mb-4">Product Listing</h1>
      {/* Component to display the list of products */}
      <ProductList products={productsData} />
    </div>
  );
};

export default HomePage;
