import { SPage } from 'servisofts-component';
import login from './login';
import tripulacionInicio from './Tripulacion/index';

import cargos from './Tripulacion/Cargo/Lista';
import cargoRegistro from './Tripulacion/Cargo/Registro';

import tripulantes from './Tripulacion/Tripulante/Lista';
import tripulanteRegistro from './Tripulacion/Tripulante/Registro';


import root from './root';

export default SPage.combinePages("/", {
    "": root,
    "login": login,
    "tripulacion/inicio": tripulacionInicio,
    "tripulacion/tripulantes": tripulantes,
    "tripulacion/tripulantes/registro": tripulanteRegistro,

    "tripulacion/cargos": cargos,
    "tripulacion/cargos/registro": cargoRegistro,


});