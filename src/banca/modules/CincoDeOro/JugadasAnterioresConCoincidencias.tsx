import React, { Component } from 'react';
import { obtenerJugadasConCoincidencias } from "../../services/cincoDeOroService";
import CincoDeOroModel from "../../models/cincoDeOro";
import 'moment/locale/es';
import JugadaAnteriorConCoincidenciasComponent from "./JugadaAnteriorConCoincidencias";

type MyProps = {
    cincoDeOro: CincoDeOroModel
};
type MyState = {
    jugadasAnterioresConCoincidencias: Map<number, CincoDeOroModel[]>,
    jugadasAnterioresConCoincidenciasKeys: number[];
};

export default class JugadasAnterioresConCoincidenciasComponent extends Component<MyProps, MyState> {

    constructor(props: any) {
        super(props);
        this.state = {
            jugadasAnterioresConCoincidencias: new Map<number, CincoDeOroModel[]>(),
            jugadasAnterioresConCoincidenciasKeys: []
        };
    }

    componentDidMount() {
        this.obtenerJugadasConCoincidencias();
    }

    obtenerJugadasConCoincidencias(){
        obtenerJugadasConCoincidencias(3)
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
                        <div className="col-lg-6">
                            <h5 className="text-start pt-3">Ultima jugada</h5>
                            <div className="col-lg-12 d-flex pt-3">
                                { this.props.cincoDeOro?.cincoDeOro?.map((item, index) => (
                                    <div key={ "cincoDeOro" + index } className="bolilla bolilla-coincidencia">
                                        <h3>{item}</h3>
                                    </div>
                                ))}
                            </div>
                            {
                                this.state.jugadasAnterioresConCoincidenciasKeys?.map((key) =>
                                   (
                                        <div className="pt-5" key={key}>
                                            <h3 className="text-start"> { key } coincidencias</h3>
                                            {
                                                this.obtenerJugadas(key)?.map((cincoDeOro, index) => (
                                                    <JugadaAnteriorConCoincidenciasComponent key={key + index} cincoDeOro = { cincoDeOro } cincoDeOroJugadaActual = { this.props.cincoDeOro } />
                                                ))
                                            }
                                        </div>
                                    )
                                )
                            }
                        </div>
                        <div className="col-lg-6">
                            <div className="col-lg-12 mt-5">
                                <div className="d-flex justify-content-between">
                                    <h6 className="text-start">Pozo Revancha</h6>
                                    <h6 className="text-start">{ /*this.state.cincoDeOro.pozoDeRevancha*/ }
                                        <span className="font-size-12px font-weight-normal text-transform-lowercase"> { /* "(" + this.state.cincoDeOro.numeroAciertosPozoRevancha + " aciertos)" */} </span>
                                    </h6>
                                </div>
                                <div className="col-lg-12 d-flex">
                                    { /*this.state.cincoDeOro.rebancha?.map((item, index) => (
                                        <div key={ "revancha" + index } className={index < 5 ? "bolilla" : "bolilla-extra"}>
                                            <h3>{ item }</h3>
                                        </div>
                                    )) */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        );
    }
}
