import { ITag } from "./itag.interface";

export class Tag implements ITag{
  id: number;
  nombre: string;
  created_at: Date;
  creador: {
    nombreCompleto: string
  };

  constructor(id:number, nombre:string, created_at:Date, creador:{nombreCompleto: string}) {
    this.id = id;
    this.nombre = nombre;
    this.created_at = created_at;
    this.creador = creador;
  }

}
