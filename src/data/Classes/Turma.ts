export class Turma {
  constructor(
    public id: string,
    public nome: string,
    public modulo: string
  ) {}

  //getters:
  public getId(): string {
    return this.id;
  }
  public getNome(): string {
    return this.nome;
  }
  public getModulo(): string {
    return this.modulo;
  }
}
