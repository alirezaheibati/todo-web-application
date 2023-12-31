import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialUserInfo = { info: {}, refresher: true, dragedTaskId: null };
const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: initialUserInfo,
  reducers: {
    setUserInfo(state, action) {
      if (state.info.userTasks) {
        state.info = action.payload;
      } else {
        state.info = { ...action.payload, userTasks: [] };
      }
    },
    updateUserInfo(state) {
      state.refresher = !state.refresher;
    },
    userLogout(state) {
      state.info = {};
    },
    getDragedItem(state, action) {
      state.dragedTaskId = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { userInfo: userInfoSlice.reducer },
});
export const userInfoSliceActions = userInfoSlice.actions;

export default store;
