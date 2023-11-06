import { Profile } from '@prisma/client';
import prisma from '../../config/database/prisma';
import IProfile from './IProfile';

class ProfileRepository {
  public index = async (): Promise<Profile[] | undefined> => {
    const data = await prisma.profile.findMany();
    if (data) {
      return data;
    }
    return;
  };

  public read = async (id: string): Promise<Profile | undefined> => {
    const res = await prisma.profile.findUnique({
      where: {
        id,
      },
    });
    if (res) {
      return res;
    }
  };

  public save = async (bio: string, userId: string): Promise<Profile | typeof Error> => {
    const ProfileAllreadExist = await prisma.profile.findUnique({
      where: {
        userId,
      },
    });
    if (ProfileAllreadExist) {
      throw new Error('profile ja cadastrado');
    }
    const createUser = await prisma.profile.create({
      data: {
        userId,
        bio,
      },
    });

    if (createUser) {
      return createUser;
    }
    return createUser;
  };

  public update = async ({ id, bio, userId }: IProfile) => {
    const ProfileAllreadExist = await prisma.profile.findUnique({
      where: {
        id,
      },
    });

    if (ProfileAllreadExist) {
      return { message: 'Profile ja cadastrado' };
    }

    const userIdProfileAllreadExist = await prisma.profile.findUnique({
      where: {
        userId,
        AND: {
          NOT: {
            id,
          },
        },
      },
    });

    if (userIdProfileAllreadExist) {
      const updatedProfile = await prisma.profile.update({
        where: {
          id,
        },
        data: {
          bio,
          userId,
        },
      });

      if (updatedProfile) {
        return updatedProfile;
      }
    } else {
      return { erro: 'Userid nao encontrado' };
    }
  };

  public delete = async (id: string) => {
    const ProfileAllreadExist = await prisma.profile.findUnique({
      where: {
        id,
      },
    });

    if (ProfileAllreadExist) {
      const deleteUser = await prisma.profile.delete({
        where: {
          id,
        },
      });
      if (deleteUser) {
        return { erro: 'Profile deletato com sucesso' };
      }
    } else {
      return { message: 'Profile não encontrado' };
    }
  };
}

export default ProfileRepository;
