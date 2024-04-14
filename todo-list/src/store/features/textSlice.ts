import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface TextState {
  value: string;
}

const initialState: TextState = {
  value: '',
};

export const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setText } = textSlice.actions;
export default textSlice.reducer;
