import { Tag } from "../tag/tag.model";
import { IExpert } from "./iexpert.interface";

export class Expert implements IExpert{
  id:number;
  nombre:string;
  created_at:Date;
  updated_at:Date;
  nif: string;
  estado:string;
  disponibilidad: string;
  puntuacion: number;
  origen: string;
  contacto_telefono: string;
  contacto_email: string;
  fichero_cv: string;
  contacto_linkedin: string;
  etiquetas: Tag[];

  constructor(id:number, nombre:string, created_at:Date, updated_at:Date, nif: string, estado:string, disponibilidad: string,
    puntuacion:number, origen: string, contacto_telefono: string, contacto_email: string, fichero_cv: string, contacto_linkedin: string,
    etiquetas: Tag[]) {
    this.id = id;
    this.nombre = nombre;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.nif = nif;
    this.estado = estado;
    this.disponibilidad = disponibilidad;
    this.puntuacion = puntuacion;
    this.origen = origen;
    this.contacto_telefono = contacto_telefono;
    this.contacto_email = contacto_email;
    this.fichero_cv = fichero_cv;
    this.contacto_linkedin = contacto_linkedin;
    this.etiquetas = etiquetas;
  }
}
