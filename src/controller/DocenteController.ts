import { Request, Response } from "express";
import { DocenteDatabase } from "../data/DataBases/DocenteDatabase";
import { v4 as generateId } from "uuid";
import moment from "moment";
import { Docentes } from "../data/Classes/Docentes";

export default class DocenteController {
  getAllTeachers = async (req: Request, res: Response): Promise<void> => {
    let statusCode = 400;

    try {
      const docentesDB = new DocenteDatabase();
      const docentes = await docentesDB.getTeachers();
      console.log(docentes);

      res.status(200).send(docentes);
    } catch (error: any) {
      res.status(statusCode).end();
    }
  };

  createTeachers = async (req: Request, res: Response): Promise<void> => {
    let statusCode = 400;

    try {
      const { nome, email, data_nasc, turma_id, especialidades } = req.body;

      if (!nome || !email) {
        throw new Error("Parâmetros enviados no body não podem ser vazios");
      }

      const newId = generateId();
      const newDate = moment(data_nasc, "DD/MM/YYYY").format("YYYY-MM-DD");
      const docente = new Docentes(
        newId,
        nome,
        email,
        newDate,
        turma_id,
        especialidades
      );

      const docenteDB = new DocenteDatabase();

      await docenteDB.createTeacher(docente);

      res.status(200).send(`Docente ${nome} adicionado`);
    } catch (error: any) {
      res.status(statusCode).send(error.sqlMessage || error.message);
    }
  };

  changeModuleTeachers = async (req: Request, res: Response): Promise<void> => {
    let statusCode = 400;
    try {
      const { docenteId, turmaId } = req.body;
      if (!docenteId) {
        throw new Error("Parâmetro docenteId requerido não enviado.");
      }
      if (!turmaId) {
        throw new Error("Parâmetro turmaId requerido não enviado.");
      }
      const docentesDB = new DocenteDatabase();
      console.log(req.body);
      await docentesDB.changeModuleTeacher(docenteId, turmaId);

      res.status(200).send("Mudança de docente efetuada com sucesso");
    } catch (error: any) {
      res.status(statusCode).end();
    }
  };
}
