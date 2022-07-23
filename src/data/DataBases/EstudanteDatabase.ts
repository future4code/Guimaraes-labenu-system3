import { Estudantes } from "../Classes/Estudantes";
import { BaseDatabase } from "../BaseDatabase";
import { v4 as generateId } from "uuid";
import { Request, Response } from "express";
import { Student } from "./types";

export class EstudanteDatabase extends BaseDatabase {
  //GET - Pega todos os estudantes:

  getStudent = async (): Promise<void> => {
    try {
      return await EstudanteDatabase.connection("ESTUDANTE");
    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  };
  //GET - Pega estudantes por nome:

  getStudentByName = async (nome: string): Promise<any> => {
    try {
      const resultado = await EstudanteDatabase.connection("ESTUDANTE")
        .select("*")
        .where("nome", "like", `%${nome}%`);
      return resultado;
    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  };
  //POST - Cria estudante

  createStudent = async (estudante: Estudantes): Promise<void> => {
    try {
      await EstudanteDatabase.connection("ESTUDANTE").insert({
        id: estudante.getId(),
        nome: estudante.getNome(),
        email: estudante.getEmail(),
        data_nasc: estudante.getDataNasc(),
        turma_id: estudante.getTurmaId(),
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  };

  changeEstudante = async (id: string, novaTurma: string): Promise<void> => {
    try {
      await EstudanteDatabase.connection("ESTUDANTE")
        .update({ turma_id: novaTurma })
        .where("id", id);
    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  };
}
