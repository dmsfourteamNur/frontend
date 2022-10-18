import { SPage } from "servisofts-component";

import root from "./root";
import marca from "./marca";
import aeronave from "./aeronave";
import modelo from "./modelo";
export default SPage.combinePages("aeronave", {
    "": root,
    ...marca,
	...aeronave,
	...modelo
});
