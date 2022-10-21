import Config from '../../Config';
import axios from 'axios';

export default () => {
  return axios.create({
    baseURL: `${Config.apis.venta}`
  });
};
