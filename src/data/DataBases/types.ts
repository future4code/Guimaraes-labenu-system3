//Estudante:
export type Student = {
  id: number;
  name: string;
  email: string;
  data_nasc: Date;
  turma_id: number;
  hobbies: string[];
};
//Docente:
export type instructorSkill = {
  id: number;
  name: string;
  email: string;
  data_nasc: Date;
  turma_id: number;
  especialidade: string[];
};
//Estudante:
export type Hobby = {
  id: string;
  name: string;
};
//Docente:
export type Skill = {
  id: number;
  name: string;
};
