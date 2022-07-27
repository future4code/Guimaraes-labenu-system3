import { BaseDatabase } from "../BaseDatabase";
import { Request, Response } from "express";
import { v4 as generateId } from "uuid";
import { Turma } from "../Classes/Turma";

export class TurmaDatabase extends BaseDatabase {
  criarTurma = async (newClass: Turma): Promise<void> => {
    try {
      await TurmaDatabase.connection("TURMA").insert(newClass);
    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  };

  getTurmas = async (): Promise<void> => {
    try {
      return await TurmaDatabase.connection("TURMA");
    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  };

  getTurmaAtiva = async ():Promise<any> => {
    try {
      const resultado =  await TurmaDatabase.connection("TURMA")
      .select('*')
      .where('modulo', '<>', `${0}`)
      return resultado
    } catch (error) {
      
    }
  }

  changeModule = async (id: string, novoModulo: string): Promise<void> => {
    try {
      await TurmaDatabase.connection("TURMA")
        .where("id", id)
        .update({ modulo: novoModulo });
    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  };
}
