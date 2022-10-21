import Api from './Api';

const name = "vuelo";

const create = async (data) => {
	const response = await Api().post(name + "/registro", data, { timeout: 8000 });
	return response.data;
};

const edit = async (data) => {
	const response = await Api().put(name + "/" + data.key, data, { timeout: 8000 });
	return response.data;
};
const remove = async (data) => {
	const response = await Api().delete(name + "/" + data.key, { timeout: 8000 });
	return response.data;
};
const getAll = async (data) => {
	const response = await Api().get(name, data, { timeout: 8000 });
	return response.data;
};
const getByKey = async (data) => {
	const response = await Api().get(name + "/" + data, { timeout: 8000 });
	return response.data;
};

const cancel = async (data) => {
	const response = await Api().put("vuelo/cancel/" + data.key, { timeout: 8000 });
	return response.data;
};
const arrive = async (data) => {
	const response = await Api().put("vuelo/arrive/" + data.key, { timeout: 8000 });
	return response.data;
};

export { getAll, create, remove, getByKey, edit, cancel, arrive };
