import { Usuario } from "../SuperClasses/Usuario";

export class Estudantes extends Usuario {
  constructor(
    protected id: string,
    protected nome: string,
    protected email: string,
    protected dataNasc: string,
    protected turmaId: string,
    protected hobbies: []
  ) {
    super(id, nome, email, dataNasc, turmaId);
  }
  getHobbies(): [] {
    return this.hobbies;
  }
}


