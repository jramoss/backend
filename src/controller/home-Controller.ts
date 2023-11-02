import { Request, Response } from "express";

class HomeController {

  public home(req:Request, res:Response) {
    return res.json({
      response: 'Bem Vindo'
    }).status(200);
  }
}

 export default new HomeController()