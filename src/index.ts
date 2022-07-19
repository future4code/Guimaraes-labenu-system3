import {app} from './app';
import { Request, Response } from 'express';
import {TurmaDatabase} from "./data/DataBases/TurmaDatabase"





//CREATE stuff:

app.post("/turmas",)


app.get('/test', (req: Request, res: Response) => {
    res.status(200).send("Servidor em pé! 👣");
});
