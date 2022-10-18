import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API  from '../../services/tripulacion/cargoApi';
const name = "cargo"
const initialState = {
	data: {},
	loading: false,
	error: false
};

const Slice = createSlice({
	name: name,
	initialState,

	extraReducers: (builder) => {
		getAll_(builder)
		getByKey_(builder)
		remove_(builder)
		create_(builder)
		update_(builder)
	}
});

export const getAll = createAsyncThunk(name + '/getAll', API.getAll);
const getAll_ = (builder) => {
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
export const getByKey = createAsyncThunk(name + '/getByKey', API.getByKey);
const getByKey_ = (builder) => {
	builder.addCase(getByKey.pending, (state, action) => {
		state.loading = true;
	});
	builder.addCase(getByKey.fulfilled, (state, action) => {
		state.loading = false;
		if (!state.data) state.data = [];
		var index = state.data.findIndex(o => o.key == action.payload.key);
		if (index > -1) {
			state.data[index] = action.payload;
		} else {
			state.data.push(action.payload);
		}
	});
	builder.addCase(getByKey.rejected, (state, action) => {
		state.loading = false;
		state.error = action.payload;
	});

}
export const remove = createAsyncThunk(name + '/delete', API.remove);
const remove_ = (builder) => {
	builder.addCase(remove.pending, (state, action) => {
		state.loading = true;
	});
	builder.addCase(remove.fulfilled, (state, action) => {
		state.loading = false;
		var index = state.data.findIndex(o => o.key == action.payload);
		if (index > -1) {
			state.data.splice(index, 1);
		}
	});
	builder.addCase(remove.rejected, (state, action) => {
		state.loading = false;
		state.error = action.payload;
	});
}
export const create = createAsyncThunk(name + '/create', API.create);
const create_ = (builder) => {
	builder.addCase(create.pending, (state, action) => {
		state.loading = true;
	});
	builder.addCase(create.fulfilled, (state, action) => {
		state.loading = false;
		if (!state.data) state.data = [];
		var index = state.data.findIndex(o => o.key == action.payload.key);
		if (index > -1) {
			state.data[index] = action.payload;
		} else {
			state.data.push(action.payload);
		}
	});
	builder.addCase(create.rejected, (state, action) => {
		state.loading = false;
		state.error = action.payload;
	});
}

export const update = createAsyncThunk(name + '/update', API.update);
  const update_ = (builder) => {
	builder.addCase(update.pending, (state, action) => {
		state.loading = true;
	});
	builder.addCase(update.fulfilled, (state, action) => {
		state.loading = false;
		if (!state.data) state.data = [];
		 var index = state.data.findIndex(o => o.key == action.payload.key);
		// if (index > -1) {
		// 	state.data[index] = action.payload;
		// } else {
		// 	state.data.push(action.payload);
		// }
		state.data[index] = {
			...state.data[index],
			...action.payload,
		  };
	});
	builder.addCase(update.rejected, (state, action) => {
		state.loading = false;
		state.error = action.payload;
	});

}

// export const { } = cargoSlice.actions;

export default Slice.reducer;
