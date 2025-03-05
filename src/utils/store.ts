import { configureStore } from "@reduxjs/toolkit"
import themeSlice from "./slices/themeSlice"
import githubSlice from "./slices/githubSlice"

const store = configureStore({
  reducer: {
    github: githubSlice,
    theme: themeSlice,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
