import express from 'express';
import { router } from './routes/index.routes';
import cors, { CorsOptions } from 'cors';
import  SwaggerRoutes  from './routes/swagger.routes'
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
    this.configSwagger();
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
  private async configSwagger(): Promise<void> {
    const swagger = await SwaggerRoutes.load();
    this.server.use(swagger);
  }

  private router() {
    this.server.use(router);
  }
}
export default new App();
