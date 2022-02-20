import React, { Component } from 'react';
import { obtenerUltimaJugada, obtenerJugadasConCoincidencias, convertirFecha } from "../Services/TombolaService";
import 'moment/locale/es';
import TombolaMostrarJugadaComponent from "../TombolaMostrarJugadaComponent";
import TombolaModel from "../Models/TombolaModel";
import JugadasAnterioresComponent from "../../CincoDeOro/JugadasAnteriores";
import TombolaJugadasAnterioresComponent from "../JugadasAnterioresTombola";
import JugadasAnterioresConCoincidenciasComponent from "../../CincoDeOro/JugadasAnterioresConCoincidencias";
import TombolaJugadasAnterioresConCoincidenciasComponent from "../TombolaJugadasAnterioresConCoincidencias";

type MyProps = { };
type MyState = {
    ultimaJugada: [],
    tombola: TombolaModel
};
export default class TombolaComponent extends Component<MyProps, MyState> {

    constructor(props: any) {
        super(props);
        this.state = {
            ultimaJugada: [],
            tombola: new TombolaModel()
        };
    }

    componentDidMount() {
        this.obtenerUltimaJugada();
    }

    obtenerUltimaJugada(){
        obtenerUltimaJugada()
            .then((response) => {
                this.setState({
                    tombola: response.data.data,
                });
                console.log(response.data.data);
            })
            .catch((err) => {
                console.log(err)
            });
    }

    obtenerJugadasCoCoincidencias(){
        obtenerJugadasConCoincidencias(3)
            .then((response) => {
                this.setState({
                    tombola: response.data.data,
                });
            })
            .catch((err) => {
                console.log(err)
            });
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
                                                        { this.state.tombola.esDiurno ? <h3 className="text-start">Sorteo Vespertino</h3> : <h3 className="text-start">Sorteo Nocturno</h3>}
                                                    </div>
                                                    <div className="col-lg-12 d-flex mt-2">
                                                        <h5> { convertirFecha(this.state.tombola.fechaTirada) } </h5>
                                                    </div>
                                                </div>

                                                <TombolaMostrarJugadaComponent tombola = { this.state.tombola } mostrarFecha = { false }/>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                                            <img src="assets/images/slider-dec.png" alt=""/>
                                        </div>
                                    </div>

                                    <TombolaJugadasAnterioresComponent jugadaActual = { this.state.tombola } />

                                    <TombolaJugadasAnterioresConCoincidenciasComponent tombola = { this.state.tombola } />

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
