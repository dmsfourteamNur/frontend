import { SPage } from "servisofts-component";

import root from "./root";
import marca from "./marca";
export default SPage.combinePages("aeronave", {
    "": root,
    ...marca
});
