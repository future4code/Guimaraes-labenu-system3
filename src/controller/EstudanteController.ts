import { Request, Response } from "express";
import { EstudanteDatabase } from "../data/DataBases/EstudanteDatabase";
import { Estudantes } from "../data/Classes/Estudantes";
import { v4 as generateId } from "uuid";
import moment from "moment";
import { Hobby } from "../data/Classes/Hobby";
import { HobbyDatabase } from "../data/DataBases/HobbyDataBase";

export default class EstudanteController {
  getStudent = async (req: Request, res: Response): Promise<void> => {
    let statusCode = 400;

    try {
      const estudanteDB = new EstudanteDatabase();
      const estudante = await estudanteDB.getStudent();
      console.log(estudante);

      res.status(200).send(estudante);
    } catch (error: any) {
      res.status(statusCode).end();
    }
  };

  getStudentByName = async (req: Request, res: Response): Promise<void> => {
    let statusCode = 400;

    try {
      let { nome } = req.query;
      if (!nome) {
        throw new Error("Nome não encontrado");
      }

      const estudanteDB = new EstudanteDatabase();
      const estudante = await estudanteDB.getStudentByName(nome as string);

      res.status(200).send(estudante);
    } catch (error: any) {
      res.status(statusCode).send(error.sqlMessage || error.message);
    }
  };

  createStudent = async (req: Request, res: Response): Promise<void> => {
    let statusCode = 400;

    try {
      const { nome, email, data_nasc, turma_id, hobbies } = req.body;

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

      const newHobby = new Hobby(newId, hobbies);
      const hobbyDB = new HobbyDatabase();
      await hobbyDB.createHobby(newHobby);
      const estudanteDB = new EstudanteDatabase();
      await estudanteDB.createStudent(estudante);

      res.status(200).send(`Estudante ${nome} adicionado`);
    } catch (error: any) {
      res.status(statusCode).send(error.sqlMessage || error.message);
    }
  };

  changeEstudante = async (req: Request, res: Response): Promise<void> => {
    let statusCode = 400;

    try {
      const { id, novaTurma } = req.body;
      if (!id) {
        throw new Error(`Parâmetro 'id' faltando. Favor tentar novamente.`);
      }
      if (!novaTurma) {
        throw new Error(`Parâmetro 'turma' faltando. Favor tentar novamente.`);
      }
      const estudanteDB = new EstudanteDatabase();
      await estudanteDB.changeEstudante(id, novaTurma);

      res.status(200).send(`Mudança de turma efetuada com sucesso`);
    } catch (error: any) {
      res.status(statusCode).end();
    }
  };
}
