import express from 'express';
import { router } from './routes/index.routes';
import cors, { CorsOptions } from 'cors';
import dotenv from 'dotenv';
dotenv.config();

class App {
  public server: express.Application;
  private corsOptions: CorsOptions = {
    origin: '*',
  };

  constructor() {
    this.server = express();
    this.config();
    this.middleware();
    this.router();
  }

  private config(): void {
    this.server.use(cors(this.corsOptions));
  }

  private middleware() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
  }
  private router() {
    this.server.use(router);
  }
}
export default new App();
