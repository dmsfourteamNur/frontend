import Config from '../../Config';
import Http from '../../Http';
import Api from './Api';


const create = async (data) => {
	const response = await Api().post("cargo/registro", data, {
		timeout: 8000
	})
	console.log(response.data);
	return await getByKey(response.data);
};
const remove = async (data) => {
	const response = await Api().delete("cargo/" + data.key, {
		timeout: 8000
	})
	return response.data;
};

const getAll = async (data) => {
	const response = await Api().get('cargo', data, { timeout: 8000 });
	return response.data;
};
const getByKey = async (data) => {
	const response = await Api().get("cargo/" + data, {
		timeout: 8000
	})
	return response.data;
};

const update = async (id, data) => {
	const response = await Api().put('cargo/' + id, ...data, { timeout: 8000 });
	return response.data;
};

export { getAll, create, remove, getByKey, update };
