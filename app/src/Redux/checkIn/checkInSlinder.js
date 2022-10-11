import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getObtenerSession } from "../../services/login/loginApi";

const initialState = {
  data: {},
  loading: false,
  error: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(obtenerSession.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(obtenerSession.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    });
    builder.addCase(obtenerSession.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.data = {};
    });
  },
});

// ejemplo utilizando extraReducer
export const obtenerSession = createAsyncThunk(
  "login/obtenerSession",
  async (params) => {
    const response = await getObtenerSession(params);
    return response;
  }
);

// ejemplo utilizando reducer action
// export const getTodos = () => {
//   return async (dispatch) => {
//     dispatch(fetchTodosStart());
//     try {
//       const response = await obtenerSession();
//       dispatch(fetchTodosSuccess(response));
//     } catch (error) {
//       dispatch(fetchTodosError(error));
//     }
//   };
// };

export const {
  fetchTodosStart,
  fetchTodosSuccess,
  fetchTodosError,
  clearData,
} = loginSlice.actions;

export default loginSlice.reducer;
