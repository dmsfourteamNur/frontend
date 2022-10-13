import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAll } from '../../services/vuelo/vueloApi';

const initialState = {
	data: {},
	loading: false,
	error: false
};

const tripulacionesSlice = createSlice({
	name: 'tripulacion',
	initialState,

	extraReducers: (builder) => {

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

export const { } = tripulacionesSlice.actions;

export default tripulacionesSlice.reducer;
