import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number | string
  rate: number | string
  candidates: number | string
}

const initialState: CounterState = {
  value: 0,
  rate: 0,
  candidates:5000,
}

export const counterSlice = createSlice({
  name: 'submitvalue',
  initialState,
  reducers: {
    submitvalues: (state, action: PayloadAction<CounterState>) => {
        state.value = action.payload.value;
        state.rate = action.payload.rate;
        state.candidates = action.payload.candidates;
    },
  },
})

// Action creators are generated for each case reducer function
export const { submitvalues } = counterSlice.actions

export default counterSlice.reducer