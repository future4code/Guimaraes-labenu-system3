import { Request, Response } from 'express'
import { EstudanteDatabase } from '../data/DataBases/EstudanteDatabase'
import { Estudantes } from '../data/Classes/Estudantes'
import { v4 as generateId } from 'uuid'
import moment from 'moment'

export default class EstudanteController {

    getAllStudents = async (req: Request, res: Response): Promise<void> => {
        let statusCode = 400;
    
        try {
          const estudantesDB = new EstudanteDatabase();
          const estudantes = await estudantesDB.getStudents();
          console.log(estudantes);
          
          res.status(200).send(estudantes);
        } catch (error: any) {
          res.status(statusCode).end();
        }
      };

}
