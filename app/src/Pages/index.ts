import { SPage } from "servisofts-component";
import login from "./login";
import root from "./root";

import aeronave from './aeronave';
import msVuelo from "./msVuelo/index";
import Tripulacion from "./Tripulacion";
export default SPage.combinePages("/", {
	"": root,
	login: login,
	...aeronave,
	...Tripulacion,
	...msVuelo,
});
