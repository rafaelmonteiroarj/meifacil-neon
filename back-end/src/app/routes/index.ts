import * as winston from 'winston';
import { Request, Response } from 'express';
import chargesController from '../controllers/chargesController';
import * as swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

export function initRoutes(app: any) {
  winston.log('info', '--> Initialisations des routes');

  /* health */
  app.get('/', (_req: Request, res: Response) => {
    res.status(200).send({ message: 'server is running!' });
  });

  /** payments */
  app.get('/charges', chargesController.listCharges);
  app.post('/charges', chargesController.addCharge);
  app.get('/charges/:id', chargesController.listChargesById);
  app.get('/chargesByStatus/:status', chargesController.listChargesByStatus);

  /** API DOC */
  app.use('/swagger', swaggerUi.serve);
  app.get('/swagger', swaggerUi.setup(swaggerDocument));

  app.all('*', (_req: Request, res: Response) => res.status(400).send({ message: 'Algo inesperado ..' }));
}
