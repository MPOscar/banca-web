import React, { Component } from 'react';
import { obtenerUltimaJugada, obtenerJugadasConCoincidencias, convertirFecha } from "../../services/cincoDeOroService";
import CincoDeOroModel from "../../models/cincoDeOro";
import 'moment/locale/es';
import JugadasAnterioresConCoincidenciasComponent from "./JugadasAnterioresConCoincidencias";
import JugadasAnterioresComponent from "./JugadasAnteriores";
import MostrarJugadaComponent from "./MostrarJugada";

type MyProps = { };
type MyState = {
    ultimaJugada: [],
    cincoDeOro: CincoDeOroModel
};
export default class CincoDeOroComponent extends Component<MyProps, MyState> {

    constructor(props: any) {
        super(props);
       // moment().locale('es');
        this.state = {
            ultimaJugada: [],
            cincoDeOro: new CincoDeOroModel()
        };
    }

    componentDidMount() {
        this.obtenerUltimaJugada();
    }

    obtenerUltimaJugada(){
        obtenerUltimaJugada()
            .then((response) => {
                this.setState({
                    cincoDeOro: response.data.data,
                });
            })
            .catch((err) => {
                console.log(err)
            });
    }

    obtenerJugadasCoCoincidencias(){
        obtenerJugadasConCoincidencias(3)
            .then((response) => {
                this.setState({
                    cincoDeOro: response.data.data,
                });
            })
            .catch((err) => {
                console.log(err)
            });
    }

    pruebaFuncion(){
        const { ultimaJugada } = this.state;
        console.log(ultimaJugada);
    }

    render() {

        return (
            <div className="CincoDeOroComponent">
                <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-6 align-self-center">
                                        <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s"
                                             data-wow-delay="1s">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div>
                                                        <h3 className="text-start">Resultados de los Sorteos</h3>
                                                    </div>
                                                    <div className="col-lg-12 d-flex mt-2">
                                                        <h5> { convertirFecha(this.state.cincoDeOro.fechaTirada) } </h5>
                                                    </div>
                                                </div>

                                                <MostrarJugadaComponent cincoDeOro = { this.state.cincoDeOro } mostrarFecha = { false }/>


                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                                            <img src="assets/images/slider-dec.png" alt=""/>
                                        </div>
                                    </div>
                                </div>

                                <JugadasAnterioresComponent jugadaActual = { this.state.cincoDeOro } />

                                <JugadasAnterioresConCoincidenciasComponent cincoDeOro = { this.state.cincoDeOro } />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
