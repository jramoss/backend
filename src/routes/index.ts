import { Router } from 'express';
import homeController from '../controller/HomeController';
import { UserRoute } from './UserRoutes';
const router: Router = Router();

//Routes
router.get('/', homeController.home);
router.use('/users', UserRoute);

export { router };
