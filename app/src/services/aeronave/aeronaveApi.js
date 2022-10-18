import Api from './Api';

const getAll = async (data) => {
	const response = await Api().get('aeronave', data, { timeout: 8000 });
	return response.data;
};

export { getAll };
