import axios from "axios";
import moment from "moment";
import CincoDeOroModel from "../../CincoDeOro/Models/CincoDeOroModel";

import data from "../../../../env.json";

export function obtenerUltimaJugada() {
    console.log(data);
    return axios.get(data.apiUrl + '/tombola/obtenerUltimaJugada');
}

export function obtenerUltimasJugadas(page: number, size: number) {
    return axios.get(data.apiUrl + '/tombola/obtenerUltimasJugadas?page=' + page + '&size=' + size);
}

export function obtenerJugadasAnteriores(cincoDeOro: CincoDeOroModel, page: number, size: number) {
    return axios.post(data.apiUrl + '/tombola/obtenerJugadasAnteriores?page=' + page + '&size=' + size, cincoDeOro);
}

export function obtenerJugadasPosteriores(cincoDeOro: CincoDeOroModel, page: number, size: number) {
    return axios.post(data.apiUrl + '/tombola/obtenerJugadasPosteriores?page=' + page + '&size=' + size, cincoDeOro);
}

export function obtenerJugadasConCoincidencias(numeroDeCoincidencias: number) {
    return axios.get(data.apiUrl + '/tombola/obtenerJugadasTombolaConMayorNumeroDeCoincidencias?numeroDeCoincidencias=' + numeroDeCoincidencias);
}

export const numbers = [5,10,15,20];

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
