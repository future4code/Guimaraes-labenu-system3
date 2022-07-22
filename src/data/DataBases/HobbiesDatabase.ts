import { BaseDatabase } from "../BaseDatabase";
import { Hobby } from "../Classes/Hobbies";

export class HobbiesDatabase extends BaseDatabase {
  criarHobby = async (newHobby: Hobby): Promise<void> => {
    try {
      await HobbiesDatabase.connection("HOBBY").insert(newHobby);
    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  };

  getHobby = async (): Promise<void> => {
    try {
      return await HobbiesDatabase.connection("HOBBY");
    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  };
}
