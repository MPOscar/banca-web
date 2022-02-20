import React, { Component } from 'react';
import {
    convertirFecha,
    numbers,
    obtenerJugadasConCoincidencias,
    obtenerUltimasJugadas
} from "./Services/TombolaService";
import 'moment/locale/es';
import TombolaJugadaAnteriorConCoincidencias from "./TombolaJugadaAnteriorConCoincidencias";
import TombolaModel from "./Models/TombolaModel";

type MyProps = {
    tombola: TombolaModel
};
type MyState = {
    jugadasAnterioresConCoincidencias: Map<number, TombolaModel[]>,
    jugadasAnterioresConCoincidenciasKeys: number[];
    ultimasJugadas: TombolaModel[];
};

export default class TombolaJugadasAnterioresConCoincidenciasComponent extends Component<MyProps, MyState> {

    constructor(props: any) {
        super(props);
        this.state = {
            jugadasAnterioresConCoincidencias: new Map<number, TombolaModel[]>(),
            jugadasAnterioresConCoincidenciasKeys: [],
            ultimasJugadas: [],
        };
    }

    componentDidMount() {
        this.obtenerJugadasConCoincidencias();
        this.obtenerUltimasJugadas();
    }

    obtenerJugadasConCoincidencias(){
        obtenerJugadasConCoincidencias(1)
            .then((response) => {
                console.log(response.data);
                let mapaDeJugadas:  Map<number, TombolaModel[]> = new Map<number, TombolaModel[]>();
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

    obtenerUltimasJugadas(){
        obtenerUltimasJugadas(1, 4)
            .then((response) => {
                this.setState({
                    ultimasJugadas: response.data.data
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
                        {
                            this.state.ultimasJugadas?.map((tombola, indexCincoDeOro) => (
                                <div className="col-lg-3 mt-4" key = { indexCincoDeOro } >
                                    <div>
                                        { tombola.esDiurno ? <h3 className="text-start">Sorteo Vespertino</h3> : <h3 className="text-start">Sorteo Nocturno</h3>}
                                    </div>
                                    <h5 className="text-start pt-3"> { convertirFecha(tombola.fechaTirada) } </h5>
                                    <div className="d-flex">
                                        {
                                            numbers.map((item, index) => (
                                                <div className="d-flex flex-column" key={item + index}>
                                                    { tombola.sorteo?.slice(item - 5, item).map((item, index) => (
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
                            ))
                        }
                    </div>
                    <div className="row col-lg-12">
                            {
                                this.state.jugadasAnterioresConCoincidenciasKeys?.map((key) =>
                                   (
                                        <div className="pt-5" key={key}>
                                            <h3 className="text-start"> { key } coincidencias</h3>
                                            {
                                                this.obtenerJugadas(key)?.map((tombola, index) => (
                                                    <TombolaJugadaAnteriorConCoincidencias key={key + index} tombola = { tombola } ultimasJugadas = { this.state.ultimasJugadas } />
                                                ))
                                            }
                                        </div>
                                    )
                                )
                            }
                    </div>
                </div>
        );
    }
}
