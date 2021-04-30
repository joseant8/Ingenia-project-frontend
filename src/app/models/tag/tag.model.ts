import { ITag } from "./itag.interface";

interface Creador {
  id: number,
  nombreCompleto: string
}

export class Tag implements ITag{
  id: number;
  nombre: string;
  created_at: Date;
  creador: Creador;

  constructor(id:number, nombre:string, created_at:Date, creador: Creador) {
    this.id = id;
    this.nombre = nombre;
    this.created_at = created_at;
    this.creador = creador;
  }

}
