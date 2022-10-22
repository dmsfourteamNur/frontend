import { SPage } from "servisofts-component";
import Registro from "./registro";
import root from "./root";
import select from "./select";
export default SPage.combinePages("vuelo", {
	"": root,
	"registro": Registro,
	"select": select
});
