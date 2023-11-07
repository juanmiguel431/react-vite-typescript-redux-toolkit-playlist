import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { appReset } from '../actions.ts';

type State = string[];
const initialState: State = [];

const movieSlice = createSlice({
  name: 'movie',
  initialState: initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    deleteMovie: (state, action: PayloadAction<string>) => {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(appReset, (state, action) => {
      return [];
    });
  }
});

export default movieSlice;
