import { Router } from 'express';
import UsersController from '../controller/UsersController';
import Uservalidate, { schema } from "../middlewares/user-validate"
const UserRoute = Router();

//User Routes 
UserRoute.get('/', UsersController.index)
UserRoute.get('/:id', UsersController.read)
UserRoute.put('/:id', UsersController.read)
UserRoute.post('/',Uservalidate(schema), UsersController.create)
UserRoute.patch('/:id',Uservalidate(schema), UsersController.update)
UserRoute.delete('/:id', UsersController.delete)

export { UserRoute };
