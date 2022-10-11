import { SPage } from "servisofts-component";
import login from "./login";
import root from "./root";
import test from "./test";

import aeronave from './aeronave';
import msVuelo from "./msVuelo/index";
import Tripulacion from "./Tripulacion";
export default SPage.combinePages("/", {
  "": root,
  // "": tripulacionInicio,
  login: login,
  test: test,
  ...aeronave,
	...Tripulacion,
	...msVuelo,
});
