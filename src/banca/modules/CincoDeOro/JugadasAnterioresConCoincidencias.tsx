import React, { Component } from 'react';
import {convertirFecha, obtenerJugadasConCoincidencias, obtenerUltimasJugadas} from "../../services/cincoDeOroService";
import CincoDeOroModel from "../../models/cincoDeOro";
import 'moment/locale/es';
import JugadaAnteriorConCoincidenciasComponent from "./JugadaAnteriorConCoincidencias";

type MyProps = {
    cincoDeOro: CincoDeOroModel
};
type MyState = {
    jugadasAnterioresConCoincidencias: Map<number, CincoDeOroModel[]>,
    jugadasAnterioresConCoincidenciasKeys: number[];
    ultimasJugadas: CincoDeOroModel[];
};

export default class JugadasAnterioresConCoincidenciasComponent extends Component<MyProps, MyState> {

    constructor(props: any) {
        super(props);
        this.state = {
            jugadasAnterioresConCoincidencias: new Map<number, CincoDeOroModel[]>(),
            jugadasAnterioresConCoincidenciasKeys: [],
            ultimasJugadas: [],
        };
    }

    componentDidMount() {
        this.obtenerJugadasConCoincidencias();
        this.obtenerUltimasJugadas();
    }

    obtenerJugadasConCoincidencias(){
        obtenerJugadasConCoincidencias(1)
            .then((response) => {
                let mapaDeJugadas:  Map<number, CincoDeOroModel[]> = new Map<number, CincoDeOroModel[]>();
                let mapaDeJugadasKeys: number[] = [];
                for(let key in response.data.data){
                    mapaDeJugadasKeys = [...mapaDeJugadasKeys, parseInt(key)];
                    mapaDeJugadas.set(parseInt(key), response.data.data[key]);
                }
                mapaDeJugadasKeys = mapaDeJugadasKeys.sort();
                mapaDeJugadasKeys = mapaDeJugadasKeys.reverse();
                this.setState({
                    jugadasAnterioresConCoincidencias: mapaDeJugadas,
                    jugadasAnterioresConCoincidenciasKeys: mapaDeJugadasKeys
                });
            })
            .catch((err) => {
                console.log(err)
            });
    }

    obtenerUltimasJugadas(){
        obtenerUltimasJugadas(1, 4)
            .then((response) => {
                this.setState({
                    ultimasJugadas: response.data.data
                });
            })
            .catch((err) => {
                console.log(err)
            });
    }

    obtenerJugadas(key: number){
        return this.state.jugadasAnterioresConCoincidencias?.get(key);
    }

    render() {

        return (
                <div className="row pt-5">
                    <div className="text-start">
                        <h2>Jugadas anteriores con coincidencias</h2>
                        <p>Aqui puede ver las jugadas anteriores, que tienen un numero de coincidencias con la ultima jugada.</p>
                    </div>
                    <div className="row col-lg-12">
                        {
                            this.state.ultimasJugadas?.map((cincoDeOro, indexCincoDeOro) => (
                                <div className="col-lg-3 mt-4" key = { indexCincoDeOro } >
                                    <h5 className="text-start pt-3"> { convertirFecha(cincoDeOro.fechaTirada) } </h5>
                                    <div className="d-flex justify-content-between">
                                        <h6 className="text-start">Pozo de Oro</h6>
                                        <h6 className="text-start">{ cincoDeOro.pozoDeOro }
                                            <span className="font-size-12px font-weight-normal text-transform-lowercase"> {  "(" +  cincoDeOro.numeroAciertosPozoDeOro + " aciertos)" } </span>
                                        </h6>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h6 className="text-start">Pozo de Plata</h6>
                                        <h6 className="text-start">{ cincoDeOro.pozoDePlata }
                                            <span className="font-size-12px font-weight-normal text-transform-lowercase"> { "(" + cincoDeOro.numeroAciertosPozoDePlata + " aciertos)" } </span>
                                        </h6>
                                    </div>
                                    <div className="col-lg-12 d-flex">
                                        {
                                            cincoDeOro.cincoDeOro?.map((item, index) => (
                                                <div key={ "cincoDeOro" + index } className={indexCincoDeOro == 0 ? "bolilla-jugadas-anteriores bolilla-coincidencia" : "bolilla-jugadas-anteriores"}>
                                                    <h5>{item}</h5>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="row col-lg-12">
                            {
                                this.state.jugadasAnterioresConCoincidenciasKeys?.map((key) =>
                                   (
                                        <div className="pt-5" key={key}>
                                            <h3 className="text-start"> { key } coincidencias</h3>
                                            {
                                                this.obtenerJugadas(key)?.map((cincoDeOro, index) => (
                                                    <JugadaAnteriorConCoincidenciasComponent key={key + index} cincoDeOro = { cincoDeOro } ultimasJugadas = { this.state.ultimasJugadas } />
                                                ))
                                            }
                                        </div>
                                    )
                                )
                            }
                    </div>
                </div>
        );
    }
}
