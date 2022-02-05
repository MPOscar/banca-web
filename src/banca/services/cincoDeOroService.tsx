import axios from "axios";
import moment from "moment";

export function obtenerUltimaJugada() {
    return axios.get('http://localhost:8090/cincoDeOro/obtenerUltimaJugada');
}

export function obtenerUltimasJugadas(page: number, size: number) {
    return axios.get('http://localhost:8090/cincoDeOro/obtenerUltimasJugadas?page=' + page + '&size=' + size);
}

export function obtenerJugadasConCoincidencias(numeroDeCoincidencias: number) {
    return axios.get('http://localhost:8090/cincoDeOro/obtenerJugadasCincoDeOroConMayorNumeroDeCoincidencias?numeroDeCoincidencias=' + numeroDeCoincidencias);
}

export function convertirFecha(fecha: any){
    let fechaFormateada = "";
    if(fecha) {
        var fechaDelSorteo = moment(new Date(fecha));
        let diaDeLaSemana = toFirstLetterUpercase(fechaDelSorteo.format('dddd'));
        let dia = fechaDelSorteo.format('DD');
        let mes = toFirstLetterUpercase(fechaDelSorteo.format('MMMM'));
        let anno = fechaDelSorteo.format('YYYY');
        fechaFormateada = diaDeLaSemana + " " + dia + " de " + mes + " de " + anno;
    }
    return fechaFormateada;
}

export function toFirstLetterUpercase(wordToConvert: string){
    return wordToConvert.charAt(0).toUpperCase() + wordToConvert.slice(1);
}
