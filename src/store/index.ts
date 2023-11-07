import { configureStore } from '@reduxjs/toolkit';
import movieSlice from './slices/movieSlice.ts';

export const store = configureStore({
  reducer: {
    movies: movieSlice.reducer
  }
});

export const actionCreators = {
  ...movieSlice.actions
};

//https://react-redux.js.org/using-react-redux/usage-with-typescript#define-root-state-and-dispatch-types
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
