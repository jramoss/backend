import { Router } from 'express';
import PostController from '../controller/PostController';
const PostRoute = Router();

//User Routes
PostRoute.get('/', PostController.index);
PostRoute.get('/:id', PostController.read);
PostRoute.put('/:id', PostController.read);
PostRoute.post('/', PostController.create);
PostRoute.patch('/:id', PostController.update);
PostRoute.delete('/:id', PostController.delete);

export { PostRoute };
