import { SPage } from "servisofts-component";

import root from "./root";
import registro from "./registro";
import asientos from "./asientos";
export default SPage.combinePages("aeronave", {
	"": root,
	registro,
	...asientos
});
