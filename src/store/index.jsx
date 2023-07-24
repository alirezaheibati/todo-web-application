import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialTaskTags = [
  { tagName: "Meeting", id: "t1", tagColor: "#c8eaee" },
  { tagName: "Work", id: "t2", tagColor: "#f800c8" },
];
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

const tagsSlice = createSlice({
  name: "taskTags",
  initialState: initialTaskTags,
  reducers: {
    addNewTag(state, action) {
      state.push(action.payload);
    },
    removeTag(state, action) {},
  },
});

const store = configureStore({
  reducer: { userInfo: userInfoSlice.reducer, tasktags: tagsSlice.reducer },
});
export const userInfoSliceActions = userInfoSlice.actions;
export const taskTagsSliceActions = tagsSlice.actions;

export default store;
