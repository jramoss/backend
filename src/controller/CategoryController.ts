import { Request, Response } from 'express';
import CategoryRepository from '../repositories/Category/CategoryRepository';
import ICategory from '../repositories/Category/ICategory';

class CategoryController {
  protected repo: CategoryRepository;

  constructor() {
    this.repo = new CategoryRepository();
  }

  index = async (req: Request, res: Response) => {
    try {
      const categoties = await this.repo.index();
      if (categoties) {
        return res.json(categoties).status(200);
      }
    } catch (error) {
      return res.json(error).status(400);
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const { name } = req.body;
      const newCategry = await this.repo.save(name);
      if (newCategry) {
        return res.json(newCategry).status(200);
      }
    } catch (error) {
      return res.json(error).status(400);
    }
  };

  read = async (req: Request, res: Response) => {
    try {
      const categoty = await this.repo.read(req.params.id);

      if (categoty) {
        return res.json(categoty).status(200);
      }
    } catch (error) {
      return res.json(error).status(400);
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { name, posts }: ICategory = req.body;
      const UpdateCategory = await this.repo.update({ id, name, posts });

      if (UpdateCategory) {
        return res.json(UpdateCategory).status(200);
      }
    } catch (error) {
      return res.json(error).status(400);
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const DeleteCategory = await this.repo.delete(req.params.id);
      return res.json(DeleteCategory).status(200);
    } catch (error) {
      return res.json(error);
    }
  };
}

export default new CategoryController();
