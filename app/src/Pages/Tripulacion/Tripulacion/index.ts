import { SPage } from "servisofts-component";
import addTripulante from "./addTripulante";
import Registro from "./registro";
import root from "./root";
 export default SPage.combinePages("tripulacion", {
    "": root,
    "registro": Registro,
    "addTripulante": addTripulante

});
