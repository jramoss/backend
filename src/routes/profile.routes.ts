import { Router } from 'express';
import ProfileController from '../controller/ProfileController';
const profileRoute = Router();

//User Routes 
profileRoute.get('/', ProfileController.index)
profileRoute.get('/:id', ProfileController.read)
profileRoute.put('/:id', ProfileController.read)
profileRoute.post('/', ProfileController.create)
profileRoute.patch('/:id', ProfileController.update)
profileRoute.delete('/:id', ProfileController.delete)

export { profileRoute };
