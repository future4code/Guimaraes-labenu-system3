import { app } from "./app";
import { Request, Response } from "express";
import { TurmaController } from "./controller/TurmaController";
import EstudanteController from "./controller/EstudanteController";
import DocenteController from "./controller/DocenteController";
import { EstudanteDatabase } from "./data/DataBases/EstudanteDatabase";

//Get turmas:
const getTurmas = new TurmaController();
app.get("/turmas", getTurmas.getTurmas);

//Create turmas:
const turmaController = new TurmaController();
app.post("/turmas", turmaController.criarTurma);

//Update turmas:
const updateModulo = new TurmaController();
app.put("/turmas", updateModulo.changeModule);




//Get estudante por nome

const getEstudantePorNome = new EstudanteController();
app.get("/estudantes/", getEstudantePorNome.getStudentByName);

//Create estudante:
const estudanteController = new EstudanteController();
app.post("/estudantes", estudanteController.createStudent);

//Update turma do estudante
// const updateEstudante = new EstudanteController();
// app.put('/estudantes', updateEstudante.changeEstudante)
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
