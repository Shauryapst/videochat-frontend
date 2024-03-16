import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../slices/cartSlice';
import authReducer from '../slices/authSlice';


const reducer = {
    cart: cartReducer,
    auth: authReducer
};

const store = configureStore({
    reducer: reducer,
    devTools: true
});

export default store;