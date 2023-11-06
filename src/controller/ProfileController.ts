import { Request, Response } from 'express';
import ProfileRepository from '../repositories/Profile/ProfileRepository';
import IProfile from '../repositories/Profile/IProfile';


class ProfileController {
  protected repo: ProfileRepository;

  constructor() {
    this.repo = new ProfileRepository();
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
      const { bio, userId }: IProfile = req.body;
      const newProfile = await this.repo.save(bio, userId);
      if (newProfile) {
        return res.json(newProfile).status(200);
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
      const { bio, userId }: IProfile = req.body;
      const UpdateProfile = await this.repo.update({ id, bio, userId });

      if (UpdateProfile) {
        return res.json(UpdateProfile).status(200);
      }
    } catch (error) {
      return res.json(error).status(400);
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const DeleteProfile = await this.repo.delete(req.params.id);
      return res.json(DeleteProfile).status(200);
    } catch (error) {
      return res.json(error);
    }
  };
}

export default new ProfileController();
