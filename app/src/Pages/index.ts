import { SPage } from 'servisofts-component';
import login from './login';
import tripulacion from './Tripulacion/index';
import root from './root';

export default SPage.combinePages("/", {
    "": root,
    "login": login,
    "tripulacion/inicio": tripulacion
});