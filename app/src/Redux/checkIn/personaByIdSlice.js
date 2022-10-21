import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Api from '../../services/checkin/Api';

const initialState = {
  data: {},
  loading: false,
  error: false
};

const personaByIdSlice = createSlice({
  name: 'persona',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getByIdPersona.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getByIdPersona.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getByIdPersona.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export const getByIdPersona = createAsyncThunk(
  'persona/getByIdPersona',
  async (id) => {
    return Api()
      .get('checkin/vuelo/' + id)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

export const {} = personaByIdSlice.actions;

export default personaByIdSlice.reducer;
