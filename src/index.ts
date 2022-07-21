import { app } from "./app";
import { Request, Response } from "express";
import { TurmaController } from "./controller/TurmaController";
import EstudanteController from "./controller/EstudanteController";

//Get turmas:
const getTurmas = new TurmaController();
app.get("/turmas", getTurmas.getTurmas);

//Create stuff:
const turmaController = new TurmaController();
app.post("/turmas", turmaController.criarTurma);

//Get estudantes
const getEstudante = new EstudanteController()
app.get("/estudantes", getEstudante.getAllStudents)

//Create estudante

// const estudanteController = new EstudanteController();
// app.post("/estudantes", estudanteController.createStudent);
/* */

app.get("/test", (req: Request, res: Response) => {
  res.status(200).send("Servidor em pé! 👣");
});

