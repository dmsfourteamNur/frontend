import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from '../../services/aeronave/aeronaveApi';
const name = "aeronave"
const initialState = {
	data: {},
	loading: false,
	error: false
};

const Slice = createSlice({
	name: name,
	initialState,

	extraReducers: (builder) => {
		builder.addCase(getAll.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(getAll.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload;
		});
		builder.addCase(getAll.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload;
		});
	}
});

export const getAll = createAsyncThunk(name + '/getAll', API.getAll);

// export const { } = checkinSlice.actions;

export default Slice.reducer;
