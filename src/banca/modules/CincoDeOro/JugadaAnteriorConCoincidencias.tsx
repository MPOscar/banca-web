import React, { Component } from 'react';
import CincoDeOroModel from "../../models/cincoDeOro";
import 'moment/locale/es';
import cincoDeOro from "../../models/cincoDeOro";
import { convertirFecha } from "../../services/cincoDeOroService";


type MyProps = {
    cincoDeOroJugadaActual: CincoDeOroModel
    cincoDeOro: CincoDeOroModel
};
export default class JugadaAnteriorConCoincidenciasComponent extends Component<MyProps> {

    constructor(props: any) {
        super(props);
    }

    public esUnaCoincidencia(numero: number): boolean {
        let index =  this.props.cincoDeOroJugadaActual.cincoDeOro?.indexOf(numero);
        return (index !== undefined ? index > -1 : false);
    }

    render() {

        return (
            <div className="col-lg-12 mt-4">
                <h5 className="text-start pt-3"> { convertirFecha(this.props?.cincoDeOro.fechaTirada) } </h5>
                <div className="d-flex justify-content-between">
                    <h6 className="text-start">Pozo de Oro</h6>
                    <h6 className="text-start">{ this.props?.cincoDeOro.pozoDeOro }
                        <span className="font-size-12px font-weight-normal text-transform-lowercase"> {  "(" +  this.props?.cincoDeOro.numeroAciertosPozoDeOro + " aciertos)" } </span>
                    </h6>
                </div>
                <div className="d-flex justify-content-between">
                    <h6 className="text-start">Pozo de Plata</h6>
                    <h6 className="text-start">{ this.props?.cincoDeOro.pozoDePlata }
                        <span className="font-size-12px font-weight-normal text-transform-lowercase"> { "(" + this.props?.cincoDeOro.numeroAciertosPozoDePlata + " aciertos)" } </span>
                    </h6>
                </div>
                <div className="col-lg-12 d-flex">
                    {
                        this.props.cincoDeOro.cincoDeOro?.map((item, index) => (
                            <div key={ "cincoDeOro" + index } className={ this.esUnaCoincidencia(item) ? "bolilla bolilla-coincidencia" : "bolilla"}>
                                <h3>{item}</h3>
                            </div>
                        ))}
                </div>
            </div>

        );
    }
}
