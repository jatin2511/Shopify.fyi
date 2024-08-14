import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import App from './App.jsx';
import './index.css';

// Create a Redux store with the cartReducer for managing cart state
const store = configureStore({
  reducer: {
    cart: cartReducer, // Add cartReducer to the store
  },
});

// Render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Provide the Redux store to the App component */}
    <Provider store={store}>
      <App/>
    </Provider>
  </StrictMode>,
);
