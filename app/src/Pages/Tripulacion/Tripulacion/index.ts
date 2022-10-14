import { SPage } from "servisofts-component";
import Registro from "./registro";
import root from "./root";
import addTripulante from "./addTripulante";
 export default SPage.combinePages("tripulacion", {
    "": root,
    "registro": Registro,
    "addTripulante": addTripulante

});
