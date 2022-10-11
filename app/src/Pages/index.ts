import { SPage } from "servisofts-component";
import aeronave from './aeronave';
import login from "./login";
import root from "./root";
import test from "./test";
import Tripulacion from "./Tripulacion";
import vuelo from "./vuelo";

export default SPage.combinePages("/", {
  "": root,
  // "": tripulacionInicio,
  login: login,
  test: test,
  ...aeronave,
	...Tripulacion,
	...vuelo,
});
