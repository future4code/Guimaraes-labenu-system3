

export class Turma {
  constructor(
    public id: string,
    public nome: string,
    public docentes: [],
    public estudantes: [],
    public modulo: string
  ) {}

  public getId(): string {
    return this.id;
  }
  public getNome(): string {
    return this.nome;
  }
  public getDocentes(): [] {
    return this.docentes;
  }
  public getEstudantes(): [] {
    return this.estudantes;
  }
  public getModulo(): string {
    return this.modulo;
  }
}
