import React, { Component } from 'react';
import CincoDeOroModel from "../../models/cincoDeOro";
import 'moment/locale/es';
import cincoDeOro from "../../models/cincoDeOro";
import { convertirFecha, obtenerJugadasAnteriores, obtenerJugadasPosteriores } from "../../services/cincoDeOroService";


type MyProps = {
    cincoDeOro: CincoDeOroModel,
    ultimasJugadas: CincoDeOroModel[]
};
type MyState = {
    jugadasAnteriores: CincoDeOroModel[],
    jugadasPosteriores: CincoDeOroModel[]
};
export default class JugadaAnteriorConCoincidenciasComponent extends Component<MyProps, MyState> {

    constructor(props: any) {
        super(props);
        this.state = {
            jugadasAnteriores: [],
            jugadasPosteriores: []
        };
    }

    componentDidMount() {
        this.obtenerJugadasAnteriores();
        this.obtenerJugadasPosteriores();
    }

    public esUnaCoincidencia(numero: number, posicion: number): boolean {
        let index =  this.props.ultimasJugadas[posicion].cincoDeOro?.indexOf(numero);
        return (index !== undefined ? index > -1 : false);
    }

    obtenerJugadasAnteriores(){
        obtenerJugadasAnteriores(this.props.cincoDeOro, 1, 4)
            .then((response) => {
                this.setState({
                    jugadasAnteriores: response.data.data
                });
            })
            .catch((err) => {
                console.log(err)
            });
    }

    obtenerJugadasPosteriores(){
        obtenerJugadasPosteriores(this.props.cincoDeOro, 1, 4)
            .then((response) => {
                this.setState({
                    jugadasPosteriores: response.data.data
                });
            })
            .catch((err) => {
                console.log(err)
            });
    }

    render() {

        return (
            <div className="row col-lg-12 mt-4">
                {
                    this.state.jugadasAnteriores?.map((cincoDeOro, posicion) => (
                        <div className="col-lg-3 mt-4">
                            <h6 className="text-start pt-3"> { convertirFecha(cincoDeOro.fechaTirada) } </h6>
                            <div className="d-flex justify-content-between pt-1">
                                <h6 className="text-start">Pozo de Oro</h6>
                                <h6 className="text-start">{ cincoDeOro.pozoDeOro }
                                    <span className="font-size-12px font-weight-normal text-transform-lowercase"> {  "(" + cincoDeOro.numeroAciertosPozoDeOro + " aciertos)" } </span>
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
                                        <div key={ "cincoDeOro" + index } className={ this.esUnaCoincidencia(item, posicion) ? "bolilla-jugadas-anteriores bolilla-coincidencia" : "bolilla-jugadas-anteriores"}>
                                            <h5>{item}</h5>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))
                }
                {
                    this.state.jugadasPosteriores?.map((cincoDeOro, posicion) => (
                        <div className="col-lg-3 mt-4">
                            <h6 className="text-start pt-3"> { convertirFecha(cincoDeOro.fechaTirada) } </h6>
                            <div className="d-flex justify-content-between pt-1">
                                <h6 className="text-start">Pozo de Oro</h6>
                                <h6 className="text-start">{ cincoDeOro.pozoDeOro }
                                    <span className="font-size-12px font-weight-normal text-transform-lowercase"> {  "(" + cincoDeOro.numeroAciertosPozoDeOro + " aciertos)" } </span>
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
                                        <div key={ "cincoDeOro" + index } className={ this.esUnaCoincidencia(item, posicion) ? "bolilla-jugadas-anteriores bolilla-coincidencia" : "bolilla-jugadas-anteriores"}>
                                            <h5>{item}</h5>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))
                }

            </div>
        );
    }
}
