import { Request, Response } from 'express';
import PostRepository from '../repositories/Post/PostRepository';
import IPostDto from '../repositories/Post/IPostDto';

class PostController {
  protected repo: PostRepository;

  constructor() {
    this.repo = new PostRepository();
  }

  index = async (req: Request, res: Response) => {
    try {
      const Profiles = await this.repo.index();
      if (Profiles) {
        return res.json(Profiles).status(200);
      }
    } catch (error) {
      return res.json(error).status(400);
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const { title, published, authorId }: IPostDto = req.body;
      const newPost = await this.repo.save({ title, published, authorId });
      if (newPost) {
        return res.json(newPost).status(200);
      }
    } catch (error) {
      return res.json(error).status(400);
    }
  };

  read = async (req: Request, res: Response) => {
    try {
      const Profile = await this.repo.read(req.params.id);

      if (Profile) {
        return res.json(Profile).status(200);
      }
    } catch (error) {
      return res.json(error).status(400);
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { title, published, author, authorId, categories }: IPostDto = req.body;
      const UpdatePost = await this.repo.update({ id, title, published, author, authorId, categories });

      if (UpdatePost) {
        return res.json(UpdatePost).status(200);
      }
    } catch (error) {
      return res.json(error).status(400);
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const DeletePost = await this.repo.delete(req.params.id);
      return res.json(DeletePost).status(200);
    } catch (error) {
      return res.json(error);
    }
  };
}

export default new PostController();
