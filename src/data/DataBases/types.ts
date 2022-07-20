//Estudante:
export type Student = {
  id: number;
  name: string;
  email: string;
  birthDate: Date;
  classId: number;
  hobby: string[];
};
//Docente:
export type instructorSkill = {
  id: number;
  name: string;
  email: string;
  birthDate: Date;
  classId: number;
  skill: string[];
};
//Estudante:
export type Hobby = {
  id: number;
  name: string;
};
//Docente:
export type Skill = {
  id: number;
  name: string;
};
