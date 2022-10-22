import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Api from '../../services/checkin/Api';

const initialState = {
  dataRegistro: {},
  loading: false,
  error: false
};

const registroSlice = createSlice({
  name: 'registro',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(checkInregistro.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(checkInregistro.fulfilled, (state, action) => {
      state.loading = false;
      state.dataRegistro = action.payload;
    });
    builder.addCase(checkInregistro.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export const checkInregistro = createAsyncThunk(
  'registro/checkInregistro',
  async (params) => {
    return Api()
      .post('checkin/registro', params)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

export const {} = registroSlice.actions;

export default registroSlice.reducer;
