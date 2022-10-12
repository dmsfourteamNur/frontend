import Api from './Api';

const getAll = async (data) => {
  const response = await Api().get('checkin', data, {timeout: 8000});
  return response.data;
};

export {getAll};
