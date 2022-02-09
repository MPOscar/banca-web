import React, { Component } from 'react';
import CincoDeOroModel from "./Models/CincoDeOroModel";
import 'moment/locale/es';
import { convertirFecha } from "./Services/CincoDeOroService";

type MyProps = {
    cincoDeOro: CincoDeOroModel,
    mostrarFecha: boolean
};
type MyState = {
};

export default class MostrarJugadaComponent extends Component<MyProps, MyState> {

    constructor(props: any) {
        super(props);
    }

    render() {

        return (
                <div>
                    <div className="col-lg-12  mt-4">
                        { this.props.mostrarFecha ? <h5 className="text-start pt-3"> { convertirFecha(this.props?.cincoDeOro.fechaTirada) } </h5> : "" }
                        <div className="d-flex justify-content-between">
                            <h6 className="text-start">Pozo de Oro</h6>
                            <h6 className="text-start">{ this.props.cincoDeOro?.pozoDeOro }
                                <span className="font-size-12px font-weight-normal text-transform-lowercase"> { "(" + this.props.cincoDeOro?.numeroAciertosPozoDeOro + " aciertos)" } </span>
                            </h6>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h6 className="text-start">Pozo de Plata</h6>
                            <h6 className="text-start">{ this.props.cincoDeOro?.pozoDePlata }
                                <span className="font-size-12px font-weight-normal text-transform-lowercase"> { "(" + this.props.cincoDeOro?.numeroAciertosPozoDePlata + " aciertos)" } </span>
                            </h6>
                        </div>
                        <div className="col-lg-12 d-flex">
                            { this.props.cincoDeOro?.cincoDeOro?.map((item, index) => (
                                <div key={ "cincoDeOro" + index } className={ index < 5 ? "bolilla" : "bolilla-extra"}>
                                    <h3>{item}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-12 mt-5">
                        <div className="d-flex justify-content-between">
                            <h6 className="text-start">Pozo Revancha</h6>
                            <h6 className="text-start">{ this.props.cincoDeOro?.pozoDeRevancha }
                                <span className="font-size-12px font-weight-normal text-transform-lowercase"> { "(" + this.props.cincoDeOro?.numeroAciertosPozoRevancha + " aciertos)" } </span>
                            </h6>
                        </div>
                        <div className="col-lg-12 d-flex">
                            {
                                this.props.cincoDeOro?.rebancha?.map((item, index) => (
                                <div key={ "revancha" + index } className={index < 5 ? "bolilla" : "bolilla-extra"}>
                                    <h3>{ item }</h3>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>

        );
    }
}
