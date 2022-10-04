import { SPage } from 'servisofts-component';
import login from './login';
import root from './root';
import test from './test';

export default SPage.combinePages("/", {
    "": root,
    "login": login,
    "test": test
});