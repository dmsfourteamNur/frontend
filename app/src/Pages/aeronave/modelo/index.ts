import { SPage } from "servisofts-component";

import root from "./root";
import select from "./select";
import registro from "./registro";
export default SPage.combinePages("modelo", {
	"": root,
	select,
	registro
});
