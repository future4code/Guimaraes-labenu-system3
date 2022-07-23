import { app } from "./app";
import { Request, Response } from "express";
import { TurmaController } from "./controller/TurmaController";
import EstudanteController from "./controller/EstudanteController";
import DocenteController from "./controller/DocenteController";
import { EspecialidadesController } from "./controller/EspecialidadesController";

/*  TURMAS  */

//GET - Pega todas as turmas:
const getTurmas = new TurmaController();
app.get("/turmas", getTurmas.getTurmas);

//GET- Pega turmas ativas:
const getTurmasAtivas = new TurmaController();
app.get("/turmas-ativas", getTurmasAtivas.getTurmaAtiva);

//POST - Create turmas:
const turmaController = new TurmaController();
app.post("/turmas", turmaController.criarTurma);

//PUT - Update turmas:
const updateModulo = new TurmaController();
app.put("/turmas", updateModulo.changeModule);


/*  ESTUDANTES  */

//GET - Pega todos os estudantes:
const getEstudante = new EstudanteController();
app.get("/estudantes", getEstudante.getStudent);

//GET -  Pega estudante por nome:
const getEstudantePorNome = new EstudanteController();
app.get("/estudante", getEstudantePorNome.getStudentByName);

//POST - Create estudante:
const estudanteController = new EstudanteController();
app.post("/estudantes", estudanteController.createStudent);

//PUT - Update turma do estudante
const updateEstudante = new EstudanteController();
app.put('/estudantes', updateEstudante.changeEstudante)


/*  DOCENTES  */

//GET - Pega docentes:
const getDocentes = new DocenteController();
app.get('/docentes', getDocentes.getAllTeachers);

//POST - Create docente:
const docenteController = new DocenteController();
app.post('/docentes', docenteController.createTeachers);

//PUT - Update docente:
const updateModuloDocente = new DocenteController();
app.put('/docentes', updateModuloDocente.changeModuleTeachers);


/*  ESPECIALIDADES  */

//GET - Pega especialidade:
const getEspecialidade = new EspecialidadesController();
app.get('/especialidade', getEspecialidade.getEspecialidades)

//POST - Create Especialidade:
const especialidadeController = new EspecialidadesController();
app.post('/especialidade', especialidadeController.criarEspecialidades )


/* */
app.get("/test", (req: Request, res: Response) => {
  res.status(200).send("Servidor em pé! 👣");
});
