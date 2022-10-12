import axios from 'axios';
import Config from '../../Config';

export default () => {
  return axios.create({
    baseURL: `${Config.apis.tripulacion}`
  });
};
