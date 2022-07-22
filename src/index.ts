import { app } from "./app";
import { Request, Response } from "express";
import { TurmaController } from "./controller/TurmaController";
import EstudanteController from "./controller/EstudanteController";
import DocenteController from "./controller/DocenteController";

//Get turmas:
const getTurmas = new TurmaController();
app.get("/turmas", getTurmas.getTurmas);

//Create turmas:
const turmaController = new TurmaController();
app.post("/turmas", turmaController.criarTurma);

//Update turmas:
const updateModulo = new TurmaController();
app.put("/turmas", updateModulo.changeModule);

//Get estudantes:
const getEstudante = new EstudanteController();
app.get("/estudantes", getEstudante.getAllStudents);

//Create estudante:
const estudanteController = new EstudanteController();
app.post("/estudantes", estudanteController.createStudent);
/* */

//Get docentes:
const getDocentes = new DocenteController();
app.get('/docentes', getDocentes.getAllTeachers);

//Create docente:
const docenteController = new DocenteController();
app.post('/docentes', docenteController.createTeachers);

//Update docente:
const updateModuloDocente = new DocenteController();
app.put('/docentes', updateModuloDocente.changeModuleTeachers)

app.get("/test", (req: Request, res: Response) => {
  res.status(200).send("Servidor em pé! 👣");
});
