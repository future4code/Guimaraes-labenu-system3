import { BaseDatabase } from '../BaseDatabase';
import { Request, Response } from "express";
import { v4 as generateId } from "uuid";
import { Turma } from '../Classes/Turma';



export class TurmaDatabase extends BaseDatabase{


   criarTurma = async (req: Request, res: Response): Promise<void> => {
    let statusCode = 400
  
    try {
      const newId = generateId();
      let modulo = "0";
      
      
      const { nome } = req.body;
      const newClass = new Turma(newId, nome, modulo);
      if(!nome){
        throw new Error("Parâmetro 'nome' faltando. Favor tentar novamente.")
      }
      await TurmaDatabase.connection("TURMA").insert({newClass})
      res.status(200).send("Nova turma criada com sucesso!")
    } catch (error:any) {
      res.status(statusCode).end()
    }
  };
}