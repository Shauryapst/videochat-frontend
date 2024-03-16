import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    username: null,
    accessToken: null,
    token: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loadCredentials: (state, action) => {

        },
        setCredentials: (state, action) =>{
            const {username, email, token} = action.payload;
            console.log(action.payload);
            localStorage.setItem('username', username);
            localStorage.setItem('email', email);
            localStorage.setItem('token', JSON.stringify(token));
            state.email = email;
            state.username = username;
            state.token = token;
            state.accessToken = token["accessToken"]
        },
        clearData: (state, action) =>{

        }
    }
})

export const { setCredentials, clearData } = authSlice.actions;
export default authSlice.reducer;