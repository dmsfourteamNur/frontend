import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAll } from '../../services/vuelo/vueloApi';

const initialState = {
	data: {},
	loading: false,
	error: false
};

const vueloSlice = createSlice({
	name: 'vuelo',
	initialState,

	extraReducers: (builder) => {

		builder.addCase(getAllVuelo.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(getAllVuelo.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload;
		});
		builder.addCase(getAllVuelo.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload;
		});
	}
});

export const getAllVuelo = createAsyncThunk(
	'getAllVuelo/getAllVuelo',
	async () => {
		const response = await getAll("vuelo");
		return response;
	}
);

export const { } = vueloSlice.actions;

export default vueloSlice.reducer;
