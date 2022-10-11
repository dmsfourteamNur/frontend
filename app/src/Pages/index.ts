import { SPage } from "servisofts-component";
import aeronave from './aeronave';
import login from "./login";
import root from "./root";
import Tripulacion from "./Tripulacion";
import venta from "./venta";
import vuelo from "./vuelo";
export default SPage.combinePages("/", {
	"": root,
	login,
	...aeronave,
	...Tripulacion,
	...vuelo,
	...venta
});
