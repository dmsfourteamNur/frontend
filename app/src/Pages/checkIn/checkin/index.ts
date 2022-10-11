import { SPage } from "servisofts-component";
import Registro from "./Registro";
import root from "./root";
 export default SPage.combinePages("checkin", {
    "": root,
    "registro": Registro
});
