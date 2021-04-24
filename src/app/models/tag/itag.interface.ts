export interface ITag {
  id: number,
  nombre: string,
  created_at: Date,
  creador: {
    nombreCompleto: string
  }
}
