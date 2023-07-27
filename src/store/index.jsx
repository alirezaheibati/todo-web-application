import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialUserInfo = { info: {}, refresher: true };
const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: initialUserInfo,
  reducers: {
    setUserInfo(state, action) {
      state.info = action.payload;
    },
    updateUserInfo(state) {
      state.refresher = !state.refresher;
    },
    userLogout(state) {
      state.info = {};
    },
  },
});

const store = configureStore({
  reducer: { userInfo: userInfoSlice.reducer },
});
export const userInfoSliceActions = userInfoSlice.actions;

export default store;
