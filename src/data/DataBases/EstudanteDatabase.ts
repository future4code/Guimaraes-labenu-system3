import { Estudantes } from "../Classes/Estudantes";
import { BaseDatabase } from "../BaseDatabase";
import {v4 as generateId} from 'uuid'
import { Request, Response } from "express";


export class EstudanteDatabase extends BaseDatabase {
    
//GET - Pega todos os estudantes 

getStudents = async ():Promise<void> => {
    try {
       return await EstudanteDatabase.connection('ESTUDANTE')
    } catch (error:any) {
        throw new Error(error.sqlMessage);
    }
}

//POST - Cria estudante

createStudent = async (estudante: Estudantes): Promise<void> => {
    try {
        await EstudanteDatabase.connection("ESTUDANTE").insert({
            id: estudante.getId(),
            nome: estudante.getNome(), 
            email: estudante.getEmail(),
            data_nasc: estudante.getDataNasc(),
            turma_id: estudante.getTurmaId()
         });
    } catch (error: any) {
        throw new Error(error.sqlMessage);
      }
    }
}