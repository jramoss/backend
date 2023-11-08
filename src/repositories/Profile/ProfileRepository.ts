import { Profile } from '@prisma/client';
import prisma from '../../config/database/prisma';
import IProfile from './IProfile';

class ProfileRepository {
  public index = async (): Promise<Profile[] | undefined> => {
    const data = await prisma.profile.findMany({ include: { user: {} } });
    if (data) {
      return data;
    }
    return;
  };

  public read = async (id: string) => {
    const res = await prisma.profile.findUnique({
      where: {
        id,
      },
    });
    if (res) {
      return res;
    }
  };

  public save = async (bio: string, userId: string) => {
    const ProfileAllreadExist = await prisma.profile.findUnique({
      where: {
        userId,
      },
    });
    if (ProfileAllreadExist) {
      return { error: 'profile ja cadastrado' };
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
    const ProfileAllreadExist = await prisma.profile.findUnique({ where: { id } });

    if (ProfileAllreadExist) {
      const updatedProfile = await prisma.profile.update({ where: { id }, data: { bio, userId } });
      if (updatedProfile) {
        return { message: 'Atualizado com sucesso', updatedProfile };
      } else {
        return { erro: 'Userid nao encontrado' };
      }
    } else {
      return { message: 'Profile não encontrado' };
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
