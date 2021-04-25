import { Tag } from "../tag/tag.model";
import { IExpert } from "./iexpert.interface";

export class Expert implements IExpert{
  id:number;
  nombre:string;
  created_at:Date;
  estado:string;
  puntuacion: number;
  etiquetas: Tag[];

  constructor(id:number, nombre:string, created_at:Date, estado:string, puntuacion:number, etiquetas: Tag[]) {
    this.id = id;
    this.nombre = nombre;
    this.created_at = created_at;
    this.estado = estado;
    this.puntuacion = puntuacion;
    this.etiquetas = etiquetas;
  }
}
