import Api from './Api';

const name = "vuelo";
const create = async (data) => {
	const response = await Api().post(name + "/registro", data, {
		timeout: 8000
	})
	console.log(response.data);
	return await getByKey(response.data);
};

const edit = async (data) => {
	const response = await Api().put(name + "/" + data.key, data, {
		timeout: 8000
	})
	return response.data
};
const remove = async (data) => {
	const response = await Api().delete(name + "/" + data.key, {
		timeout: 8000
	})
	return response.data;
};
const getAll = async (data) => {
	const response = await Api().get(name, data, { timeout: 8000 });
	return response.data;
};
const getByKey = async (data) => {
	const response = await Api().get(name + "/" + data, {
		timeout: 8000
	})
	return response.data;
};
const add = async (data) => {
	const response = await Api().put(name + "/AddTarifa/" + data.keyVuelo, data, {
		timeout: 8000
	})
	console.log(response.data);
	return response.data
};

export { getAll, create, remove, getByKey, edit, add };
