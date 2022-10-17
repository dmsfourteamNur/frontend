import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getAll} from '../../services/checkin/checkInApi';

const initialState = {
  data: {},
  loading: false,
  error: false
};

const checkinSlice = createSlice({
  name: 'checkin',
  initialState,

  extraReducers: (builder) => {
    // builder.addCase(registro.pending, (state, action) => {
    //   state.loading = true;
    //   state.error = null;
    // });
    // builder.addCase(registro.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.error = null;
    //   state.data = action.payload;
    // });
    // builder.addCase(registro.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    //   state.data = {};
    // });

    builder.addCase(getAllCheckIn.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllCheckIn.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getAllCheckIn.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export const getAllCheckIn = createAsyncThunk(
  'getAllCheckIn/getAllCheckIn',
  async () => {
    const response = await getAll();
    return response;
  }
);

export const {} = checkinSlice.actions;

export default checkinSlice.reducer;
