import { Request, Response } from "express";
import { v4 as generateId } from "uuid";
import { Hobby } from "../data/Classes/Hobby";
import { HobbyDatabase } from "../data/DataBases/HobbyDataBase";

export class HobbyController{
    criarHobby =async (req: Request, res: Response): Promise<void> => {
        let statusCode = 400;
        try {
            const { nome } = req.body;
            if (!nome) {
              throw new Error("Parâmetros enviados no body não podem ser vazios");
            }
            const newId = generateId();
            const newHobby = new Hobby(newId, nome);
            const hobbyDB = new HobbyDatabase();
      await hobbyDB.createHobby(newHobby);
      res.status(200).send(`Novo hobby ${nome} criada com sucesso`);
    }catch(error:any){
        res.status(statusCode).end();

    }
};
getHobby = async (req: Request, res: Response): Promise<void> => {
    let statusCode = 400;

    try {
      const hobbyDB = new HobbyDatabase();
      const allHobby = await hobbyDB.getHobby();
      console.log(allHobby);
      res.status(200).send(allHobby);
    } catch (error: any) {
      res.status(statusCode).end();
    }
  };
}