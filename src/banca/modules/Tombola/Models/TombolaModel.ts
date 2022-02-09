export default class TombolaModel {
    public id?: string;
    public sid?: string;
    public fechaCreacion?: Date;
    public fechaEdicion?: Date;
    public eliminado?: false;
    public sorteo?:  number[];
    public esDiurno?: boolean;
    public fechaTirada?: Date;

    constructor() {
    }
}
