import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import cors from 'cors';

import * as routes from './app/routes';
import errorHandler from './app/helpers/errorHandler';

class Server {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middlewares();
  }

  middlewares() {
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(express.json());
    this.express.use(cors({ optionsSuccessStatus: 200 })); //alguns navegadores legados (IE11, várias SmartTVs) engasgam com 204
    this.express.use(expressValidator());

    /* Capturing exceptions from application errors */
    this.express.use(errorHandler);

    /* routes */
    routes.initRoutes(this.express);
  }
}

export default new Server().express;
