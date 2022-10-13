import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAll } from '../../services/vuelo/vueloApi';

const initialState = {
	data: {},
	loading: false,
	error: false
};

const aeronavesSlice = createSlice({
	name: 'aeronave',
	initialState,

	extraReducers: (builder) => {

		builder.addCase(getAllAeronave.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(getAllAeronave.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload;
		});
		builder.addCase(getAllAeronave.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload;
		});
	}
});

export const getAllAeronave = createAsyncThunk(
	'getAllAeronave/getAllAeronave',
	async () => {
		const response = await getAll("aeronave");
		return response;
	}
);

export const { } = aeronavesSlice.actions;

export default aeronavesSlice.reducer;
