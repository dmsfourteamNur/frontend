import { SPageListProps } from 'servisofts-component';
import Services from '../Services';
import Carga from './Carga';
import entradas from './Entradas';
import Inicio from './Inicio';
import reservas from './Reservas';


const Pages: SPageListProps = {

    "/": Carga,
    "inicio": Inicio,
    "reservas": reservas,
    "entradas": entradas,
    "carga": Carga,
    ...Services.Pages,
}

export default Pages;