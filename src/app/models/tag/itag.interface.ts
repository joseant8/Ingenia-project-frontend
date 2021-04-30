import { Creator } from "../creator/creator.model";

export interface ITag {
  id: number,
  nombre: string,
  created_at: Date,
  creador: Creator
}
