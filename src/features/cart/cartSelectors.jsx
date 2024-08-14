import { createSelector } from '@reduxjs/toolkit';

// Selector to get all items from the cart
export const selectCartItems = (state) => state.cart.items;

// Selector to get the current discount applied to the cart
export const selectCartDiscount = (state) => state.cart.discount;

// Selector to calculate the total price after applying the discount
export const selectCartTotal = createSelector(
  [selectCartItems, selectCartDiscount],
  (items, discount) => {
    // Calculate subtotal and apply discount
    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return subtotal - discount;
  }
);
