import { Request, Response } from "express";
import { v4 as generateId } from "uuid";
import { Hobby } from "../data/Classes/Hobbies";
import { HobbiesDatabase } from "../data/DataBases/HobbiesDatabase";

export class HobbiesController {
  criarHobby = async (req: Request, res: Response): Promise<void> => {
    let statusCode = 400;
    try {
      const { nome } = req.body;
      if (!nome) {
        throw new Error("Parâmetro 'nome' faltando. Favor tentar novamente.");
      }
      const newId = generateId();
      const newHobby = new Hobby(newId, nome);
      const hobbyDB = new HobbiesDatabase();
      await hobbyDB.criarHobby(newHobby);
      console.log(newHobby);
      res.status(200).send("Novo hobby criado com sucesso!");
    } catch (error: any) {
      res.status(statusCode).end();
    }
  };

  getHobby = async (req: Request, res: Response): Promise<void> => {
    let statusCode = 400;
    try {
      const hobbyDB = new HobbiesDatabase();
      const allHobbies = await hobbyDB.getHobby();
      console.log(allHobbies);
      res.status(200).send(allHobbies);
    } catch (error: any) {
      res.status(statusCode).end();
    }
  };
}
