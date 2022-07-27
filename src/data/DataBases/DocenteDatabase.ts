import { Docentes } from "../Classes/Docentes";
import { BaseDatabase } from "../BaseDatabase";
import { EspecialidadesDatabase } from "./EspecialidadesDatabase";

//GET - Buscar todas as pessoas docentes
export class DocenteDatabase extends BaseDatabase {
  getTeachers = async (): Promise<void> => {
    try {
      return await DocenteDatabase.connection("DOCENTE");
    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  };

  //POST - Criar docente
  createTeacher = async (docente: Docentes): Promise<void> => {
    try {
      await EspecialidadesDatabase.connection("ESPECIALIDADE")
        .select("id")
        .where("nome", "like");

      await DocenteDatabase.connection("DOCENTE").insert({
        id: docente.getId(),
        nome: docente.getNome(),
        email: docente.getEmail(),
        data_nasc: docente.getDataNasc(),
        turma_id: docente.getTurmaId(),
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  };

  //PUT - Mudar docente de turma
  changeModuleTeacher = async (
    docenteId: string,
    turmaId: string
  ): Promise<void> => {
    try {
      await DocenteDatabase.connection("DOCENTE")
        .update({ turma_id: turmaId })
        .where("id", docenteId);
    } catch (error: any) {
      console.error(
        "Erro ao realizar update da mudança de turma para o docente",
        error
      );
      throw new Error(error.sqlMessage);
    }
  };
}
