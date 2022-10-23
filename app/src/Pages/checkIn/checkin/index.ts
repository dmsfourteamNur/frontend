import { SPage } from "servisofts-component";
import registro from "./Registro";
import root from "./root";
 export default SPage.combinePages("checkin", {
    "": root,
    "registro": registro
});
