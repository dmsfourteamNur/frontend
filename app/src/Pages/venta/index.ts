import { SPage } from "servisofts-component";
import lista from "./lista";
import registro from "./registro";
import root from "./root";
import rootVuelo from "./vuelo/root";
import registroVuelo from "./vuelo/registro";

export default SPage.combinePages("venta", {
	"": root,
	"lista": lista,
	"registro": registro,
	"vuelo/lista": rootVuelo,
	"vuelo/registro": registroVuelo

});
