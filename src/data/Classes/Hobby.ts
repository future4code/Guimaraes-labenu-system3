export class Hobby {
    constructor(
      public id: string, 
      public nome: string
      ) 
      {}
    public getId(): string {
      return this.id;
    }
    public getNome(): string {
      return this.nome;
    }
  }