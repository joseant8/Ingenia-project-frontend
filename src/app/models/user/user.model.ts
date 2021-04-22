import { IUser } from "./iuser.interface";

export class User implements IUser{
  email: string;
  password: string;

  constructor(email: string, password: string){
    this.email = email;
    this.password = password;
  }

}
