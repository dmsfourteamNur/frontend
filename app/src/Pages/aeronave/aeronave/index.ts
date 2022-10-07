import { SPage } from "servisofts-component";

import root from "./root";
import registro from "./registro";
export default SPage.combinePages("aeronave", {
    "": root,
    "registro": registro
});
