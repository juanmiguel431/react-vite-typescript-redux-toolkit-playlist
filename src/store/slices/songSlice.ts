import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { appReset } from '../actions.ts';

type State = string[];
const initialState: State = [];

const songSlice = createSlice({
  name: 'song',
  initialState: initialState,
  reducers: {
    addSong: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    deleteSong: (state, action: PayloadAction<string>) => {
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

export default songSlice;
