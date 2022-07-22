export class Hobby {
  constructor(public id: string, public name: string) {}
  //Getters:
  getId(): string {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
}
