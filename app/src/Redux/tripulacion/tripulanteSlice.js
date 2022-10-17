import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getAll} from '../../services/tripulacion/tripulacionApi';

const initialState = {
  data: {},
  loading: false,
  error: false
};

const tripulanteSlice = createSlice({
  name: 'tripulante',
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

    builder.addCase(getAllTripulante.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllTripulante.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getAllTripulante.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export const getAllTripulante = createAsyncThunk(
  'getAllTripulante/getAllTripulante',
  async () => {
    const response = await getAll("tripulante");
    return response;
  }
);

export const {} = tripulanteSlice.actions;

export default tripulanteSlice.reducer;
