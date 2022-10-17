import Api from './Api';

const getAll = async (table,data) => {
  const response = await Api().get(table, data, {timeout: 8000});
  return response.data;
};

export {getAll};
