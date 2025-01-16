import { createSelector } from '@reduxjs/toolkit';

const cartItemsSelector = (state) => state.cart.cartItems;

// count number of products in cart
export const cartItemCountSelector = createSelector(cartItemsSelector(), (cartItems) =>
  cartItems.reduce((count, item) => count + item.quantity, 0),
);

// caculate total of cart
export const cartTotalSelector = createSelector(cartItemsSelector(), (cartItems) =>
  cartItems.reduce((total, item) => total + item.salePrice * item.quantity, 0),
);
