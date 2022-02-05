import React, { Component } from 'react';
import { obtenerUltimaJugada, obtenerJugadasConCoincidencias, convertirFecha } from "../../services/cincoDeOroService";
import CincoDeOroModel from "../../models/cincoDeOro";
import moment from "moment";
import 'moment/locale/es';
import JugadasAnterioresConCoincidenciasComponent from "./JugadasAnterioresConCoincidencias";

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
                                                <div className="col-lg-12  mt-4">
                                                    <div className="d-flex justify-content-between">
                                                        <h6 className="text-start">Pozo de Oro</h6>
                                                        <h6 className="text-start">{ this.state.cincoDeOro.pozoDeOro }
                                                        <span className="font-size-12px font-weight-normal text-transform-lowercase"> { "(" + this.state.cincoDeOro.numeroAciertosPozoDeOro + " aciertos)" } </span>
                                                        </h6>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <h6 className="text-start">Pozo de Plata</h6>
                                                        <h6 className="text-start">{ this.state.cincoDeOro.pozoDePlata }
                                                            <span className="font-size-12px font-weight-normal text-transform-lowercase"> { "(" + this.state.cincoDeOro.numeroAciertosPozoDePlata + " aciertos)" } </span>
                                                        </h6>
                                                    </div>
                                                    <div className="col-lg-12 d-flex">
                                                        { this.state.cincoDeOro.cincoDeOro?.map((item, index) => (
                                                            <div key={ "cincoDeOro" + index } className={ index < 5 ? "bolilla" : "bolilla-extra"}>
                                                                <h3>{item}</h3>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 mt-5">
                                                    <div className="d-flex justify-content-between">
                                                        <h6 className="text-start">Pozo Revancha</h6>
                                                        <h6 className="text-start">{ this.state.cincoDeOro.pozoDeRevancha }
                                                            <span className="font-size-12px font-weight-normal text-transform-lowercase"> { "(" + this.state.cincoDeOro.numeroAciertosPozoRevancha + " aciertos)" } </span>
                                                        </h6>
                                                    </div>
                                                    <div className="col-lg-12 d-flex">
                                                        { this.state.cincoDeOro.rebancha?.map((item, index) => (
                                                            <div key={ "revancha" + index } className={index < 5 ? "bolilla" : "bolilla-extra"}>
                                                                <h3>{ item }</h3>
                                                            </div>
                                                        ))}
                                                    </div>
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

                                <JugadasAnterioresConCoincidenciasComponent cincoDeOro = { this.state.cincoDeOro } />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
