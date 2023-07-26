import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialUserInfo = {
  username: undefined,
  email: undefined,
  userId: undefined,
  sessionToken: undefined,
};
const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: initialUserInfo,
  reducers: {
    setUserInfo(state, action) {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.userId = action.payload.userId;
      state.sessionToken = action.payload.sessionToken;
    },
    updateUserInfo(state) {},
    userLogout(state) {
      state.username = undefined;
      state.email = undefined;
      state.userId = undefined;
      state.sessionToken = undefined;
    },
  },
});

const store = configureStore({
  reducer: { userInfo: userInfoSlice.reducer },
});
export const userInfoSliceActions = userInfoSlice.actions;

export default store;
