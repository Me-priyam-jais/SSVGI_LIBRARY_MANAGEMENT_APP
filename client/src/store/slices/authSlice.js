import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    error: null,
    message: null,
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    registerRequest(state) {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    registerSucess(state, action) {
      state.loading = false;
      state.message = action.payload.message;
    },
    registerFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    otpVerificationRequest(state) {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    otpVerificationSucess(state, action) {
      state.loading = false;
      state.message = action.payload.message;
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    otpVerificationFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const register = (data = async (dispatch) => {
  dispatch(authSlice.actions.registerRequest());
  await axios
    .post("", data, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      dispatch(authSlice.actions.registerSucess(res.data));
    })
    .catch((error) => {
      dispatch(authSlice.actions.regiterFailed(error.response.data.message));
    });
});
