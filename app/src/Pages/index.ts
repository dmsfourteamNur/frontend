import { SPage } from "servisofts-component";
import login from "./login";
import tripulacionInicio from "./Tripulacion/index";
import cargos from "./Tripulacion/Cargo/Lista";
import cargoRegistro from "./Tripulacion/Cargo/Registro";
import tripulantes from "./Tripulacion/Tripulante/Lista";
import tripulanteRegistro from "./Tripulacion/Tripulante/Registro";
import root from "./root";
import vueloLista from "./msVuelo/Vuelo/Pages/Lista";
import vueloRegistro from "./msVuelo/Vuelo/Pages/Registro";
import test from "./test";

import vueloInicio from "./msVuelo/index";

export default SPage.combinePages("/", {
  "": root,
  login: login,
  test: test,
  "tripulacion/inicio": tripulacionInicio,
  "tripulacion/tripulantes": tripulantes,
  "tripulacion/tripulantes/registro": tripulanteRegistro,
  "tripulacion/cargos": cargos,
  "tripulacion/cargos/registro": cargoRegistro,
  "vuelo/inicio": vueloInicio,
  "vuelo/lista": vueloLista,
  "vuelo/registro": vueloRegistro,
});
