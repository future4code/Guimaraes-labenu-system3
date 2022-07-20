import { Request, Response } from "express";
import { v4 as generateId } from "uuid";
import { Turma } from "../data/Classes/Turma";
import { TurmaDatabase } from "../data/DataBases/TurmaDatabase";

export class TurmaController {
  criarTurma = async (req: Request, res: Response): Promise<void> => {
    let statusCode = 400;

    try {
      const { nome } = req.body;
      if (!nome) {
        throw new Error("Parâmetro 'nome' faltando. Favor tentar novamente.");
      }
      const newId = generateId();
      let modulo = "0";
      const newClass = new Turma(newId, nome, modulo);
      const turmaDB = new TurmaDatabase();
      await turmaDB.criarTurma(newClass);
      res.status(200).send("Nova turma criada com sucesso!");
    } catch (error: any) {
      res.status(statusCode).end();
    }
  };

  getTurmas = async (req: Request, res: Response): Promise<void> => {
    let statusCode = 400;

    try {
      const turmaDB = new TurmaDatabase();
      await turmaDB.getTurmas;
      res.status(200).send(turmaDB);
    } catch (error: any) {
      res.status(statusCode).end();
    }
  };
}
