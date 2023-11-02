import { Router } from 'express';
import UsersController from '../controller/UsersController';

const UserRoute = Router();

//Routes
UserRoute.get('/', UsersController.list);

export { UserRoute };
