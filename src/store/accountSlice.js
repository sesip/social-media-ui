import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import accountService from "../services/account.service";

export const registerThunk = createAsyncThunk(
  "account/register",
  async (accountPaylod, { rejectWithValue }) => {
    try {
      var res = accountService.register(accountPaylod);
      return res;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const accountSlice = createSlice({
  name: "account-slice",
  initialState: {
    isLoading: false,
    error: null,
    isLoggedIn: false,

    //Account info
    token: null,
    username: "",
  },
  reducers: {
    getInformation: (state) => {
      state.isLoading = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.pending, (state) => {
        state.error = null;
        state.isLoading = true;
        state.isLoggedIn = false;
        state.token = null;
        state.username = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.username = action.payload.data.username;
        state.token = action.payload.data.token;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        state.isLoggedIn = false;
        state.token = null;
        state.username = null;
      });
  },
});

export default accountSlice.reducer;
