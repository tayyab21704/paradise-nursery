import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // {id, name, price, thumbnail, quantity}
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const p = action.payload;
      const existing = state.items.find((x) => x.id === p.id);
      if (!existing) {
        state.items.push({ ...p, quantity: 1 });
      }
    },
    increaseQty: (state, action) => {
      const id = action.payload;
      const item = state.items.find((x) => x.id === id);
      if (item) item.quantity += 1;
    },
    decreaseQty: (state, action) => {
      const id = action.payload;
      const item = state.items.find((x) => x.id === id);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((x) => x.id !== id);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, increaseQty, decreaseQty, removeFromCart, clearCart } =
  cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, x) => sum + x.quantity, 0);

export const selectCartTotal = (state) =>
  state.cart.items.reduce((sum, x) => sum + x.quantity * x.price, 0);

export default cartSlice.reducer;
