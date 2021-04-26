import { IRegister } from "./iregister.interface";

export class Register implements IRegister{
  nombreCompleto: string
  username: string
  password: string

  constructor (nombreCompleto: string, username: string, password: string) {
    this.nombreCompleto = nombreCompleto;
    this.username = username;
    this.password = password;
  }

}
