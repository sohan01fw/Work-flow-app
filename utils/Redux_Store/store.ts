import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "../Redux_Slice/colorSlice";
import { taskSlice } from "../Redux_Slice/taskSlice";

export const store = configureStore({
  reducer: {
    colorname: colorSlice,
    task: taskSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
