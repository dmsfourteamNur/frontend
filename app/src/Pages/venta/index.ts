import { SPage } from "servisofts-component";
import lista from "./lista";
import registro from "./registro";
import root from "./root";
export default SPage.combinePages("venta", {
	"": root,
	"lista": lista,
	"registro": registro
});
