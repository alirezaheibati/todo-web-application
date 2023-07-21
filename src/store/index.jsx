import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialUserInfo = {
  username: "user",
  email: "email",
  userId: "id",
  sessionToken: "sessionToken",
};
const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: initialUserInfo,
  reducers: {
    setUserInfo(state, action) {},
    updateUserInfo(state) {},
  },
});

const store = configureStore({ reducer: { userInfo: userInfoSlice.reducer } });
export const userInfoSliceActions = userInfoSlice.actions;
export default store;
