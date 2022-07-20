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
      await TurmaDatabase.connection("TURMA");
    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  };
}
