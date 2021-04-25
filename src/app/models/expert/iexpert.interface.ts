import { Tag } from "../tag/tag.model";

export interface IExpert {
  id:number,
  nombre:string,
  created_at:Date,
  estado:string,
  puntuacion: number,
  etiquetas: Tag[]
}
