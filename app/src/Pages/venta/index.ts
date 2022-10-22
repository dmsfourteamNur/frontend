import { SPage } from "servisofts-component";
import lista from "./lista";
import registro from "./registro";
import root from "./root";
import registroPago from "./pago/registro";
import vuelo from "./vuelo";

export default SPage.combinePages("venta", {
	"": root,
	"lista": lista,
	"registro": registro,
	"pago/registro": registroPago,
	...vuelo

});
