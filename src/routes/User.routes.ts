import { Router } from 'express';
import UsersController from '../controller/UsersController';
const UserRoute = Router();

//User Routes
UserRoute.get('/', UsersController.index);
UserRoute.get('/:id', UsersController.read);
UserRoute.put('/:id', UsersController.read);
UserRoute.post('/',  UsersController.create);
UserRoute.patch('/:id', UsersController.update);
UserRoute.delete('/:id', UsersController.delete);

export { UserRoute };
