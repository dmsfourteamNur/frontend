import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API  from '../../services/tripulacion/tripulacionApi';
const name = "tripulacion"
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
		edit_(builder)
		add_(builder)
		removeAdd_(builder)
	}
});

export const getAll = createAsyncThunk(name + '/getAll', API.getAll);
const getAll_ = (builder) => {
	builder.addCase(getAll.pending, (state, action) => {
		state.loading = true;
	});
	builder.addCase(getAll.fulfilled, (state, action) => {
		state.loading = false;
		state.data = {};
		action.payload.map(obj => {
			state.data[obj.key] = obj;
		})
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
		state.data[action.payload.key] = action.payload;
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
		delete state.data[action.payload];
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
		state.data[action.payload.key] = action.payload;
	});
	builder.addCase(create.rejected, (state, action) => {
		state.loading = false;
		state.error = action.payload;
	});
}
export const edit = createAsyncThunk(name + '/edit', API.edit);
const edit_ = (builder) => {
	builder.addCase(edit.pending, (state, action) => {
		state.loading = true;
	});
	builder.addCase(edit.fulfilled, (state, action) => {
		state.loading = false;
		state.data[action.payload.key] = action.payload;
	});
	builder.addCase(edit.rejected, (state, action) => {
		state.loading = false;
		state.error = action.payload;
	});
}
export const add = createAsyncThunk(name + '/add', API.add);
const add_ = (builder) => {
	builder.addCase(add.pending, (state, action) => {
		state.loading = true;
	});
	builder.addCase(add.fulfilled, (state, action) => {
		state.loading = false;
		state.data[action.payload.key] = action.payload;
	});
	builder.addCase(add.rejected, (state, action) => {
		state.loading = false;
		state.error = action.payload;
	});
}
export const removeAdd = createAsyncThunk(name + '/removeAdd', API.removeAdd);
const removeAdd_ = (builder) => {
	builder.addCase(removeAdd.pending, (state, action) => {
		state.loading = true;
	});
	builder.addCase(removeAdd.fulfilled, (state, action) => {
		state.loading = false;
		state.data[action.payload.key] = action.payload;
	});
	builder.addCase(removeAdd.rejected, (state, action) => {
		state.loading = false;
		state.error = action.payload;
	});
}
export default Slice.reducer;
