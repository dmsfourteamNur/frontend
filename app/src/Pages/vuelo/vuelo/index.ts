import { SPage } from "servisofts-component";
import aeronaves from "./aeronaves";
import operaciones from "./operaciones";
import registro from "./registro";
import tripulaciones from "./tripulaciones";
import vueloLLegadas from "./vueloLLegadas";
import vueloSalidas from "./vueloSalidas";

export default SPage.combinePages("vuelo", {
    "registro": registro,
    "operaciones": operaciones,
     "tripulaciones": tripulaciones,
    "aeronaves": aeronaves,
    "vuelollegadas": vueloLLegadas,
    "vuelosalidas": vueloSalidas,
 });
