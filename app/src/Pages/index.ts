import { SPage } from "servisofts-component";
import aeronave from './aeronave';
import checkIn from "./checkIn";
import login from "./login";
import root from "./root";
import Tripulacion from "./Tripulacion";
import venta from "./venta";
import vuelo from "./vuelo";
import profile from "./profile";
export default SPage.combinePages("/", {
	"": root,
	login,
	profile,
	...aeronave,
	...Tripulacion,
	...vuelo,
	...venta,
	...checkIn
});
