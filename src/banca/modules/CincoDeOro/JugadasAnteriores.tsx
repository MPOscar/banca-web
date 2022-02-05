import React, { Component } from 'react';
import {
    obtenerUltimaJugada,
    obtenerJugadasConCoincidencias,
    obtenerUltimasJugadas
} from "../../services/cincoDeOroService";
import CincoDeOroModel from "../../models/cincoDeOro";
import moment from "moment";
import 'moment/locale/es';
import JugadaAnteriorConCoincidenciasComponent from "./JugadaAnteriorConCoincidencias";
import MostrarJugadaComponent from "./MostrarJugada";

type MyProps = {
    jugadaActual: CincoDeOroModel
};
type MyState = {
    jugadasAnteriores: CincoDeOroModel[],
};

export default class JugadasAnterioresComponent extends Component<MyProps, MyState> {

    constructor(props: any) {
        super(props);
        this.state = {
            jugadasAnteriores: []
        };
    }

    componentDidMount() {
        this.obtenerJugadasConCoincidencias();
    }

    obtenerJugadasConCoincidencias(){
        obtenerUltimasJugadas(1, 4)
            .then((response) => {
                this.setState({
                    jugadasAnteriores: [...response.data.data.splice(1, response.data.data.length)]
                });
            })
            .catch((err) => {
                console.log(err)
            });
    }

    render() {

        return (
                <div className="row pt-3">
                    <div className="text-start">
                        <h2>Jugadas anteriores</h2>
                        <p>Aqui puede ver las jugadas anteriores.</p>
                    </div>
                    <div className="row col-lg-12">
                            {
                                this.state.jugadasAnteriores?.map((cincoDeOro, index) =>
                                   (
                                       <div className="col-lg-4">

                                          <MostrarJugadaComponent cincoDeOro = { cincoDeOro } mostrarFecha = { true } />

                                        </div>
                                    )
                                )
                            }
                    </div>
                </div>

        );
    }
}
