import prisma from '../../config/database/prisma';
import IUser from './IUser';
import IUserDto from './IUserDto';

class UserRepository {
  public index = async () => {
    const data = await prisma.user.findMany();
    if (data) {
      return data;
    }
  };

  public read = async (id: string) => {
    const res = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (res) {
      return res;
    }
  };

  public save = async ({ name, email, dateNasc, role }: IUser) => {
    const UserAlreadExist = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (UserAlreadExist) {
      return { Erro: 'email ja cadastrado' };
    }
    const createUser = await prisma.user.create({
      data: {
        name,
        email,
        dateNasc,
        role,
      },
    });

    if (createUser) {
      return createUser;
    }
    console.log(createUser);
    return createUser;
  };

  public update = async ({ id, name, email, dateNasc, role }: IUserDto) => {
    const useralreadyexists = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    const emailAllreadExist = await prisma.user.findUnique({
      where: {
        email,
        AND: {
          NOT: {
            id,
          },
        },
      },
    });

    if (emailAllreadExist) {
      return { Erro: 'email ja cadastrado por outro usuario' };
    }

    if (useralreadyexists) {
      const updateUser = await prisma.user.update({
        where: { id },
        data: { name, email, dateNasc, role },
      });

      if (updateUser) {
        return updateUser;
      }
    } else {
      return { Erro: 'Usuario nao encontrado' };
    }
    return { err: 'dddddd' };
  };

  public delete = async ({ id }: IUserDto) => {
    const useralreadyexists = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (useralreadyexists) {
      const deleteUser = await prisma.user.delete({
        where: {
          id,
        },
      });
      if (deleteUser) {
        return { message: 'user successfully deleted' };
      }
    } else {
      return { erro: 'User not found' };
    }
  };
}

export default UserRepository;
