import { Usuario } from "../SuperClasses/Usuario";

export class Docentes extends Usuario {
  constructor(
    protected id: string,
    protected nome: string,
    protected email: string,
    protected dataNasc: string,
    protected turmaId: string,
    protected especialidades: []
  ) {
    super(id, nome, email, dataNasc, turmaId);
  }
  getEspecialidades(): [] {
    return this.especialidades;
  }
}
