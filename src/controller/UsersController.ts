import { Request, Response } from 'express';
import UserRepo from '../repositories/Users/userRepository';
import IUser from '../repositories/Users/IUser';
import IUserDto from '../repositories/Users/IUserDto';

class UsersController {
  protected repo: UserRepo;

  constructor() {
    this.repo = new UserRepo();
  }

  index = async (req: Request, res: Response) => {
    try {
      const users = await this.repo.index();
      if (users) {
        return res.json(users).status(200);
      }
    } catch (error) {
      return res.json(error).status(400);
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const { name, email, dNasc, role }: IUser = req.body;
      const newusers = await this.repo.save({ name, email, dNasc, role });
      if (newusers) {
        return res.json(newusers).status(200);
      }
    } catch (error) {
      return res.json(error).status(400);
    }
  };

  read = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const newusers = await this.repo.read(id);

      if (newusers) {
        return res.json(newusers).status(200);
      }
    } catch (error) {
      return res.json(error).status(400);
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { name, email, dNasc, role }: IUserDto = req.body;
      const repo = new UserRepo();
      const UpdateUser = await repo.update({ id, name, email, dNasc, role });

      if (UpdateUser) {
        return res.json(UpdateUser).status(200);
      }
    } catch (error) {
      return res.json(error).status(400);
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const repo = new UserRepo();
      const DeleteUser = await repo.delete({ id });
      return res.json(DeleteUser).status(200);
    } catch (error) {
      return res.json(error);
    }
  };
}

export default new UsersController();
