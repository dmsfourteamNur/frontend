import Api from './Api';

const getAll = async () => {
  const response = await Api().get('checkin', {timeout: 8000});
  console.log(response.data);
  return response.data;
};

export {getAll};
