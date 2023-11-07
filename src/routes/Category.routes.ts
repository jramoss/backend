import { Router } from 'express';
import CategoryController from '../controller/CategoryController';
const CategoryRoute = Router();

//User Routes 
CategoryRoute.get('/', CategoryController.index)
CategoryRoute.get('/:id', CategoryController.read)
CategoryRoute.put('/:id', CategoryController.read)
CategoryRoute.post('/', CategoryController.create)
CategoryRoute.patch('/:id', CategoryController.update)
CategoryRoute.delete('/:id', CategoryController.delete)

export { CategoryRoute };
