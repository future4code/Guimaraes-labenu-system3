import { BaseDatabase } from "../BaseDatabase";
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
