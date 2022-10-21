import Api from './Api';

const getAll = async () => {
  const response = await Api().get('checkin', {timeout: 8000});
  return response.data;
};

export {getAll};
