import { BaseDatabase } from "../BaseDatabase";
import { Especialidades } from "../Classes/Especialidades";

export class EspecialidadesDatabase extends BaseDatabase {
  criarEspecialidades = async (newSkill: Especialidades): Promise<void> => {
    try {
      await EspecialidadesDatabase.connection("ESPECIALIDADE").insert(newSkill);
    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  };

  getEspecialidades = async (): Promise<void> => {
    try {
      return await EspecialidadesDatabase.connection("ESPECIALIDADE");
    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  };
}
