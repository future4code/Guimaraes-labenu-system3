import { Request, Response } from "express";
import { EstudanteDatabase } from "../data/DataBases/EstudanteDatabase";
import { Estudantes } from "../data/Classes/Estudantes";
import { Hobby } from "../data/Classes/Hobbies";
import { v4 as generateId } from "uuid";
import moment from "moment";

export default class EstudanteController {
  getAllStudents = async (req: Request, res: Response): Promise<void> => {
    let statusCode = 400;

    try {
      const estudantesDB = new EstudanteDatabase();
      const estudantes = await estudantesDB.getStudents();
      console.log(estudantes);

      res.status(200).send(estudantes);
    } catch (error: any) {
      res.status(statusCode).end();
    }
  };

  createStudent = async (req: Request, res: Response): Promise<void> => {
    let statusCode = 400;

    try {
      const { nome, email, data_nasc, turma_id, hobbies } = req.body;

      // if(!nome) {
      //     throw new Error("Parâmetro 'nome' faltando. Favor tentar novamente.");
      //   }

      const newId = generateId();
      const newDate = moment(data_nasc, "DD/MM/YYYY").format("YYYY-MM-DD");
      const estudante = new Estudantes(
        newId,
        nome,
        email,
        newDate,
        turma_id,
        hobbies
      );
      const checkHobbyType = hobbies.every((hobby: any) => {
        return typeof hobby === "string";
      });
      if (!checkHobbyType) {
        res.statusCode = 422;
        throw new Error("O campo 'hobby' precisa ser do tipo array.");
      }
      //const hobby = new Hobby(newId, hobbies);

      const estudanteDB = new EstudanteDatabase();

      await estudanteDB.createStudent(estudante);
      // await estudanteDB.createHobby(hobby);

      res.status(200).send("Estudante adicionado");
    } catch (error: any) {
      res.status(statusCode).send(error.sqlMessage || error.message);
    }
  };
}
