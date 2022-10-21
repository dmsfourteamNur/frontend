import { SPage } from "servisofts-component";
import registro from "./registro";
import root from "./root";
 export default SPage.combinePages("checkin", {
    "": root,
    "registro": registro
});
