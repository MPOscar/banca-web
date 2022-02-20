import React, { Component } from 'react';
import 'moment/locale/es';
import {convertirFecha, numbers} from "./Services/TombolaService";
import TombolaModel from "./Models/TombolaModel";

type MyProps = {
    tombola: TombolaModel,
    mostrarFecha: boolean
};
type MyState = {
};

export default class TombolaMostrarJugadaComponent extends Component<MyProps, MyState> {

    constructor(props: any) {
        super(props);
    }

    render() {

        return (
                <div>
                    <div className="col-lg-12  mt-4">
                        <div>
                            { this.props?.tombola.esDiurno ? <h3 className="text-start">Sorteo Vespertino</h3> : <h3 className="text-start">Sorteo Nocturno</h3>}
                        </div>
                        { this.props.mostrarFecha ? <h5 className="text-start pt-3"> { convertirFecha(this.props?.tombola.fechaTirada) } </h5> : "" }
                        <div className="d-flex">
                            {
                                numbers.map((item, index) => (
                                    <div className="d-flex flex-column" key={item + index}>
                                        { this.props.tombola?.sorteo?.slice(item - 5, item).map((item, index) => (
                                            <div key={ "cincoDeOro" + index } className="bolilla mb-2">
                                                <h3>{item}</h3>
                                            </div>
                                        ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

        );
    }
}
