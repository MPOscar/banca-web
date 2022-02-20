import React, { Component } from 'react';
import { obtenerUltimasJugadas } from "./Services/TombolaService";
import TombolaModel from "./Models/TombolaModel";
import 'moment/locale/es';
import TombolaMostrarJugadaComponent from "./TombolaMostrarJugadaComponent";

type MyProps = {
    jugadaActual: TombolaModel
};
type MyState = {
    jugadasAnteriores: TombolaModel[],
};

export default class TombolaJugadasAnterioresComponent extends Component<MyProps, MyState> {

    constructor(props: any) {
        super(props);
        this.state = {
            jugadasAnteriores: []
        };
    }

    componentDidMount() {
        this.obtenerUltimasJugadas();
    }

    obtenerUltimasJugadas(){
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
                                this.state.jugadasAnteriores?.map((tombola, index) =>
                                   (
                                       <div className="col-lg-4">

                                          <TombolaMostrarJugadaComponent tombola = { tombola } mostrarFecha = { true } />

                                        </div>
                                    )
                                )
                            }
                    </div>
                </div>

        );
    }
}
