import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ConsultationSliceState = {
  consultationIsActive: boolean;
}

const initialState: ConsultationSliceState = {
  consultationIsActive: false,
}

const consultationSlice = createSlice({
  name: 'consultation',
  initialState,
  reducers: {
    setConsultationIsActive: (state, action: PayloadAction<boolean>) => {
      state.consultationIsActive = action.payload
    }
  }
})

export const {setConsultationIsActive} = consultationSlice.actions;
export default consultationSlice.reducer;