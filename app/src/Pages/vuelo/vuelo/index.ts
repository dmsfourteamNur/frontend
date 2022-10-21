import { SPage } from "servisofts-component";
import aeronaves from "./aeronaves";
import aeronavesHistorial from "./aeronavesHistorial";
import operaciones from "./operaciones";
import registro from "./registro";
import tripulaciones from "./tripulaciones";
import tripulacionesHistorial from "./tripulacionesHistorial";
import vueloLLegadas from "./vueloLLegadas";
import vueloSalidas from "./vueloSalidas";

export default SPage.combinePages("vuelo", {
    "registro": registro,
    "operaciones": operaciones,
    "tripulaciones": tripulaciones,
    "tripulacionesHistorial": tripulacionesHistorial,
    "aeronaves": aeronaves,
    "aeronavesHistorial": aeronavesHistorial,
    "vuelollegadas": vueloLLegadas,
    "vuelosalidas": vueloSalidas,
 });
