import React, { Component } from 'react';
import TombolaModel from "./Models/TombolaModel";
import 'moment/locale/es';
import {convertirFecha, numbers, obtenerJugadasAnteriores, obtenerJugadasPosteriores} from "./Services/TombolaService";


type MyProps = {
    tombola: TombolaModel,
    ultimasJugadas: TombolaModel[]
};
type MyState = {
    jugadasAnteriores: TombolaModel[],
    jugadasPosteriores: TombolaModel[]
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
        let index =  this.props.ultimasJugadas[posicion].sorteo?.indexOf(numero);
        return (index !== undefined ? index > -1 : false);
    }

    obtenerJugadasAnteriores(){
        obtenerJugadasAnteriores(this.props.tombola, 1, 4)
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
        obtenerJugadasPosteriores(this.props.tombola, 1, 4)
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
            <div className="row col-lg-12 mt-4 p-3 jugadas-coincidencias-background">
                {
                    this.state.jugadasAnteriores?.map((tombola, posicion) => (
                        <div className="col-lg-3">
                            <div>
                                { tombola.esDiurno ? <h5 className="text-start">Sorteo Vespertino</h5> : <h5 className="text-start">Sorteo Nocturno</h5>}
                            </div>
                            <h6 className="text-start pt-3"> { convertirFecha(tombola.fechaTirada) } </h6>
                            <div className="d-flex">
                                {
                                    numbers.map((item, index) => (
                                        <div className="d-flex flex-column" key={item + index}>
                                            { tombola.sorteo?.slice(item - 5, item).map((item, index) => (
                                                <div key={ "cincoDeOro" + index } className={ this.esUnaCoincidencia(item, posicion) ? "bolilla bolilla-coincidencia" : "bolilla"}>
                                                    <h3>{item}</h3>
                                                </div>
                                            ))
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
                {
                    this.state.jugadasPosteriores?.map((tombola, posicion) => (
                        <div className="col-lg-3 mt-4">
                        <div>
                            { tombola.esDiurno ? <h5 className="text-start">Sorteo Vespertino</h5> : <h5 className="text-start">Sorteo Nocturno</h5>}
                        </div>
                        <h6 className="text-start pt-3"> { convertirFecha(tombola.fechaTirada) } </h6>
                        <div className="d-flex">
                            {
                                numbers.map((item, index) => (
                                    <div className="d-flex flex-column" key={item + index}>
                                        { tombola.sorteo?.slice(item - 5, item).map((item, index) => (
                                            <div key={ "cincoDeOro" + index } className={ this.esUnaCoincidencia(item, posicion) ? "bolilla bolilla-coincidencia" : "bolilla"}>
                                                <h3>{item}</h3>
                                            </div>
                                        ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    ))
                }

            </div>
        );
    }
}
