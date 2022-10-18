import Config from '../../Config';
import Http from '../../Http';
import Api from './Api';


const create = async (data) => {
	const response = await Api().post("marca/registro", data, {
		timeout: 8000
	})
	console.log(response.data);
	return await getByKey(response.data);
};

const edit = async (data) => {
	const response = await Api().put("marca/" + data.key, data, {
		timeout: 8000
	})
	return response.data
};
const remove = async (data) => {
	const response = await Api().delete("marca/" + data.key, {
		timeout: 8000
	})
	return response.data;
};
const getAll = async (data) => {
	const response = await Api().get('marca', data, { timeout: 8000 });
	return response.data;
};
const getByKey = async (data) => {
	const response = await Api().get("marca/" + data, {
		timeout: 8000
	})
	return response.data;
};

export { getAll, create, remove, getByKey, edit };
