import express from 'express';
import cors from 'cors';

import routes from './routes';

import './database';

class Application {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(express.json());
  }

  routes() {
    this.express.use(routes);
  }
}

export default new Application().express;
