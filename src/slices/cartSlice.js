import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  cartItems: {},
  totalPrice: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {quantity, ...item} = action.payload;
      const id = item.id;
      console.log(item)
      const existingItem = state.cartItems[id];
      const count = existingItem ? existingItem.count + quantity : quantity;
      state.count += quantity;
      if(existingItem){
        state.cartItems[id] = { ...existingItem , count };
      }
      else{
        state.cartItems[id] = { ...item, count };
      }
      
      state.totalPrice += item.price*quantity;
    },
    removeFromCart: (state, action) => {
      const {id} = action.payload;
      const existingItem = state.cartItems[id];
      if (!existingItem) return;
      const count = Math.max(existingItem.count - 1, 0);
      if (count === -1) {
        delete state.cartItems[id];
      } else {
        state.cartItems[id].count = count;
      }
      state.count -= 1;
      state.totalPrice = Math.max(state.totalPrice - existingItem.price, 0);
    },
    clearCart: (state) => {
      state.count = 0;
      state.cartItems = {};
      state.totalPrice = 0;
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
