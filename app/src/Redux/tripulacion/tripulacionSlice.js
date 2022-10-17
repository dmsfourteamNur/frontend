import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getAll} from '../../services/tripulacion/tripulacionApi';

const initialState = {
  data: {},
  loading: false,
  error: false
};

const tripulacionSlice = createSlice({
  name: 'cargo',
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

    builder.addCase(getAllTripulacion.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllTripulacion.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getAllTripulacion.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export const getAllTripulacion = createAsyncThunk(
  'getAllTripulacion/getAllTripulacion',
  async () => {
    const response = await getAll("tripulacion");
    return response;
  }
);

export const {} = tripulacionSlice.actions;

export default tripulacionSlice.reducer;
