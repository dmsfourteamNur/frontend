import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getAll} from '../../services/tripulacion/tripulacionApi';

const initialState = {
  data: {},
  loading: false,
  error: false
};

const cargoSlice = createSlice({
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

    builder.addCase(getAllCargo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllCargo.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getAllCargo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export const getAllCargo = createAsyncThunk(
  'getAllCargo/getAllCargo',
  async () => {
    const response = await getAll("cargo");
    return response;
  }
);

export const {} = cargoSlice.actions;

export default cargoSlice.reducer;
