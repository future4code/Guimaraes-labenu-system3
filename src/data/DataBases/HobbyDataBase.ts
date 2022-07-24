import { BaseDatabase } from "../BaseDatabase";
import { Hobby } from "../Classes/Hobby";

export class HobbyDatabase extends BaseDatabase {
  createHobby = async (newHobby: Hobby): Promise<void> => {
    try {
      await HobbyDatabase.connection("HOBBY").insert(newHobby);
    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  };

  getHobby = async (): Promise<void> => {
    try {
      return await HobbyDatabase.connection("HOBBY");
    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  };
}