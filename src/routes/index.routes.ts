import { Router } from 'express';
import homeController from '../controller/HomeController';
import { UserRoute } from './User.routes';
import { profileRoute } from './profile.routes';
import { PostRoute } from './Post.routes';
import { CategoryRoute } from './Category.routes';
const router: Router = Router();

//Routes
router.get('/', homeController.home);
router.use('/users', UserRoute);
router.use('/profiles', profileRoute);
router.use('/posts', PostRoute);
router.use('/categories', CategoryRoute);


export { router };
