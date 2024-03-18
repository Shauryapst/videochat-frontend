import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  username: null,
  accessToken: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadCredentials: (state, action) => {
      
      const username = localStorage.getItem("username");
      const email = localStorage.getItem("email");
      const token = JSON.parse(localStorage.getItem("token"));

      return {
        ...state,
        email,
        username,
        token,
        accessToken: token.accessToken,
      };
    },
    setCredentials: (state, action) => {
      const { username, email, token } = action.payload;
      console.log(action.payload);

      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("token", JSON.stringify(token));
      return {
        ...state,
        email,
        username,
        token,
        accessToken: token.accessToken,
      };
    },
  },
});

export const { loadCredentials, setCredentials } = authSlice.actions;
export default authSlice.reducer;
