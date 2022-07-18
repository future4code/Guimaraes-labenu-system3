import { v4 as uuid } from 'uuid'
export class Usuario {
  constructor(
    protected id: string,
    protected nome: string,
    protected email: string,
    protected dataNasc: string,
    protected turmaId: string
  ) {this.id = uuid()}

  getId(): string {
    return this.id;
  }

  getNome(): string {
    return this.nome;
  }

  getEmail(): string {
    return this.email;
  }
  getDataNasc(): string {
    return this.dataNasc;
  }
  getTurmaId(): string {
    return this.turmaId;
  }
}
