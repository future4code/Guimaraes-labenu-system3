import { Estudantes } from "../Classes/Estudantes";
import { Hobby } from "../Classes/Hobbies";
import { BaseDatabase } from "../BaseDatabase";

export class EstudanteDatabase extends BaseDatabase {
  //GET - Pega todos os estudantes

  getStudents = async (): Promise<void> => {
    try {
      return await EstudanteDatabase.connection("ESTUDANTE");
    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  };

  //POST - Cria estudante

  createStudent = async (estudante: Estudantes): Promise<void> => {
    try {
      await EstudanteDatabase.connection("ESTUDANTE").insert({
        id: estudante.getId(),
        nome: estudante.getNome(),
        email: estudante.getEmail(),
        data_nasc: estudante.getDataNasc(),
        turma_id: estudante.getTurmaId(),
        hobbies: estudante.getHobbies(),
      });
      const hobbies: Hobby[] = await EstudanteDatabase.connection("HOBBY");

      const studentHobbyId: string[] = [];
      const studentHobbyName: string[] = estudante.getHobbies();
      const newStudentHobbies: string[] = [];

      studentHobbyName.forEach((studentHobby) => {
        let checkHobbies: Hobby | undefined = hobbies.find(
          (hobby) => hobby.name.toLowerCase() === studentHobby.toLowerCase()
        );
        if (checkHobbies !== undefined) {
          studentHobbyId.push(checkHobbies.id);
        } else {
          newStudentHobbies.push(studentHobby);
        }
      });

      for (const studentHobby of newStudentHobbies) {
        await EstudanteDatabase.connection("HOBBY").insert({
          nome: studentHobby,
        });
      }

      const updateHobbies: Hobby[] = await EstudanteDatabase.connection(
        "HOBBY"
      );

      newStudentHobbies.forEach((hobby) => {
        const newHobby: Hobby | undefined = updateHobbies.find(
          (hobbyDB) => hobby.toLowerCase() === hobbyDB.name.toLowerCase()
        );
        newHobby !== undefined && studentHobbyId.push(newHobby.id);
      });

      await EstudanteDatabase.connection("student").insert({
        name: estudante.getNome(),
        email: estudante.getEmail(),
        birth_date: estudante.getDataNasc(),
      });

      const newStudentsDB: Estudantes[] = await EstudanteDatabase.connection(
        "student"
      )
        .select("id")
        .where({ email: estudante.getEmail() });

      for (const hobbyId of studentHobbyId) {
        await EstudanteDatabase.connection("student_hobby").insert({
          estudante_id: newStudentsDB[0].id,
          hobby_id: hobbyId,
        });
      }
    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  };

  createHobby = async (estudante: Estudantes): Promise<void> => {
    try {
      await EstudanteDatabase.connection("HOBBY").insert({
        hobbies: estudante.getHobbies(),
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  };
}
