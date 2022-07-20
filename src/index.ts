import { app } from "./app";
import { Request, Response } from "express";
import { TurmaController } from "./controller/TurmaController";

//Get turmas:
const getTurmas = new TurmaController();
app.get("/turmas", getTurmas.getTurmas);

//Create stuff:
const turmaController = new TurmaController();
app.post("/turmas", turmaController.criarTurma);

app.get("/test", (req: Request, res: Response) => {
  res.status(200).send("Servidor em pé! 👣");
});
