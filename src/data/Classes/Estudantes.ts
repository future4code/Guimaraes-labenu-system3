import { Usuario } from "../SuperClasses/Usuario";

export class Estudantes extends Usuario {
  constructor(
    public id: string,
    public nome: string,
    public email: string,
    public data_nasc: string,
    public turma_id: string,
    public hobbies: []
  ) {
    super(id, nome, email, data_nasc, turma_id);
  }
  getHobbies(): [] {
    return this.hobbies;
  }
}


