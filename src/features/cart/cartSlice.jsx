import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],         // Array to store items in the cart
    discount: 0,       // Amount of discount applied to the cart
  },
  reducers: {
    // Add an item to the cart, or increase its quantity if it already exists
    addItem: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    
    // Remove an item from the cart by its id
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    
    // Update the quantity of a specific item in the cart
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
        // Remove the item from the cart if the quantity is zero or less
        if (item.quantity <= 0) {
          state.items = state.items.filter(item => item.id !== id);
        }
      }
    },
    
    // Apply a discount to the cart
    applyDiscount: (state, action) => {
      state.discount = action.payload;
    },
    
    // Clear all items from the cart and reset the discount
    clearCart: (state) => {
      state.items = [];
      state.discount = 0;
    }
  }
});

export const { addItem, removeItem, updateQuantity, applyDiscount, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
