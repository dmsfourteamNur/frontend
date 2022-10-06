import { SPage } from "servisofts-component";
import login from "./login";
import tripulacionInicio from "./Tripulacion/index";
import cargos from "./Tripulacion/Cargo/Lista";
import cargoRegistro from "./Tripulacion/Cargo/Registro";
import tripulantes from "./Tripulacion/Tripulante/Lista";
import tripulanteRegistro from "./Tripulacion/Tripulante/Registro";
import root from "./root";
import vueloOperacion from "./msVuelo/Vuelo/Pages/Operacion";
import vueloRegistro from "./msVuelo/Vuelo/Pages/Registro";
import test from "./test";

import vueloInicio from "./msVuelo/index";
import Aeronaves from "./msVuelo/Vuelo/Pages/Aeronaves";
import Tripulaciones from "./msVuelo/Vuelo/Pages/Tripulaciones";
import VueloLLegadas from "./msVuelo/Vuelo/Pages/VueloLLegadas";
import VueloSalidas from "./msVuelo/Vuelo/Pages/VueloSalidas";

export default SPage.combinePages("/", {
  "": root,
  // "": tripulacionInicio,
  login: login,
  test: test,
  "tripulacion/inicio": tripulacionInicio,
  "tripulacion/tripulantes": tripulantes,
  "tripulacion/tripulantes/registro": tripulanteRegistro,
  "tripulacion/cargos": cargos,
  "tripulacion/cargos/registro": cargoRegistro,
  "vuelo/inicio": vueloInicio,
  "vuelo/lista": vueloOperacion,
  "vuelo/registro": vueloRegistro,
  "vuelo/aeronaves": Aeronaves,
  "vuelo/tripulaciones": Tripulaciones,
  "vuelo/vueloSalidas": VueloSalidas,
  "vuelo/vuelollegadas": VueloLLegadas,
});
