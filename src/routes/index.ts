import { Router } from "express";
import homeController from "../controller/home-Controller";

const router: Router = Router()

//Routes
router.get("/", homeController.home);

export { router };