import { Tag } from "../tag/tag.model";

export interface IExpert {
  id:number,
  nombre:string,
  created_at:Date,
  updated_at:Date,
  nif: string,
  estado:string,
  disponibilidad: string,
  puntuacion: number,
  origen: string,
  contacto_telefono: string,
  contacto_email: string,
  fichero_cv: string,
  contacto_linkedin: string,
  direccion: string,
  etiquetas: Tag[]
}
