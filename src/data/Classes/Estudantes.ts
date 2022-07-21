import { Usuario } from "../SuperClasses/Usuario";

export class Estudantes extends Usuario {
  constructor(
    public id: string,
    public nome: string,
    public email: string,
    public data_nasc: Date,
    public turma_id: string,
    public hobbies: string[]
  ) {
    super(id, nome, email, data_nasc, turma_id);
  }
  getHobbies(): string[] {
    return this.hobbies;
  }
}


