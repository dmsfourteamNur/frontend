import { SPage } from "servisofts-component";

import root from "./root";
import registro from "./registro";
export default SPage.combinePages("asientos", {
	"": root,
	registro
});
