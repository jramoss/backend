import { Request, Response } from 'express';

class UsersController {
  public list(req: Request, res: Response) {
    return res
      .json({
        response: 'users page',
      })
      .status(200);
  }
}

export default new UsersController();
