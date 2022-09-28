import { SPage } from 'servisofts-component';
import login from './login';
import root from './root';

export default SPage.combinePages("/", {
    "": root,
    "login": login,
});