import React, { Component } from 'react';
import 'moment/locale/es';
import CincoDeOroModel from "../Models/CincoDeOroModel";

type MyProps = { };
type MyState = {
    ultimaJugada: [],
    cincoDeOro: CincoDeOroModel
};
export default class BuscarJugadasComponent extends Component<MyProps, MyState> {

    constructor(props: any) {
        super(props);
        this.state = {
            ultimaJugada: [],
            cincoDeOro: new CincoDeOroModel()
        };
    }

    componentDidMount() {
        // this.obtenerUltimaJugada();
    }

    /*obtenerUltimaJugada(){
        obtenerUltimaJugada()
            .then((response) => {
                this.setState({
                    cincoDeOro: response.data.data,
                });
            })
            .catch((err) => {
                console.log(err)
            });
    }*/

    /*obtenerJugadasCoCoincidencias(){
        obtenerJugadasConCoincidencias(3)
            .then((response) => {
                this.setState({
                    cincoDeOro: response.data.data,
                });
            })
            .catch((err) => {
                console.log(err)
            });
    }*/

    pruebaFuncion(){
        const { ultimaJugada } = this.state;
        console.log(ultimaJugada);
    }

    render() {

        let jugadas = [1, 2, 3, 4, 5];
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
                                                        <h5> {/* convertirFecha(this.state.cincoDeOro.fechaTirada) */} </h5>
                                                    </div>
                                                </div>

                                                <div className="col-lg-12 d-flex">
                                                    { jugadas?.map((item, index) => (
                                                        <div key={ "cincoDeOro" + index } className="buscar-jugada">
                                                            <h3><input type="text" className="w-50 h-50"/></h3>
                                                        </div>
                                                    ))}
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                                            <img src="assets/images/slider-dec.png" alt=""/>
                                        </div>
                                    </div>
                                </div>

                                {/* <JugadasAnterioresComponent jugadaActual = { this.state.cincoDeOro } />

                                <JugadasAnterioresConCoincidenciasComponent cincoDeOro = { this.state.cincoDeOro } />*/}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
