import { SPage } from "servisofts-component";

import root from "./root";
import marca from "./marca";
import aeronave from "./aeronave";
export default SPage.combinePages("aeronave", {
    "": root,
    ...marca,
	...aeronave
});
