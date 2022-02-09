export default class CincoDeOroModel {
    public id?: string;
    public sid?: string;
    public fechaCreacion?: Date;
    public fechaEdicion?: Date;
    public eliminado?: false;
    public cincoDeOro?:  number[];
    public rebancha?: number[];
    public pozoDeOro?: string;
    public pozoDePlata?: string;
    public pozoDeRevancha?: string;
    public numeroAciertosPozoDeOro?: string;
    public numeroAciertosPozoDePlata?: string;
    public numeroAciertosPozoRevancha?: string;
    public fechaTirada?: Date;


    constructor() {
    }
}
