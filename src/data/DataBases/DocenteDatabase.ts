import { Docentes } from "../Classes/Docentes";
import { BaseDatabase } from "../BaseDatabase";
import { TurmaDatabase } from "./TurmaDatabase";

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
    id: string,
    novoModulo: string
  ): Promise<void> => {
    try {
      await DocenteDatabase.connection("DOCENTE")
        .where("id", id)
        // .update({ modulo: novoModulo });
        await TurmaDatabase.connection('TURMA')
        .update({modulo: novoModulo})
    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  };
}
