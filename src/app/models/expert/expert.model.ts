import { IExpert } from "./iexpert.interface";

export class Expert implements IExpert{
  id:number;
  nombre:string;
  created_at:Date;

  constructor(id:number, nombre:string, created_at:Date) {
    this.id = id;
    this.nombre = nombre;
    this.created_at = created_at;
  }
}
