import { Request, Response } from "express";
import { v4 as generateId } from "uuid";
import { Especialidades } from "../data/Classes/Especialidades";
import { EspecialidadesDatabase } from "../data/DataBases/EspecialidadesDatabase";

export class EspecialidadesController{
    criarEspecialidades =async (req: Request, res: Response): Promise<void> => {
        let statusCode = 400;
        try {
            const { nome } = req.body;
            if (!nome) {
              throw new Error("Parâmetros enviados no body não podem ser vazios");
            }
            const newId = generateId();
            const newSkill = new Especialidades(newId, nome);
            const especilidadeDB = new EspecialidadesDatabase();
      await especilidadeDB.criarEspecialidades(newSkill);
      res.status(200).send(`Nova especialidade ${nome} criada com sucesso`);
    }catch(error:any){
        res.status(statusCode).end();


    }
};
getEspecialidades = async (req: Request, res: Response): Promise<void> => {
    let statusCode = 400;

    try {
      const especilidadeDB = new EspecialidadesDatabase();
      const allespecilidade = await especilidadeDB.getEspecialidades();
      console.log(allespecilidade);
      res.status(200).send(allespecilidade);
    } catch (error: any) {
      res.status(statusCode).end();
    }
  };
}