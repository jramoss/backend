import prisma from '../../config/database/prisma';
import ICategory from './ICategory';

class CategoryRepository {
  public index = async () => {
    const data = await prisma.category.findMany({ include: { posts: {} } });
    if (data) {
      return data;
    }
    return;
  };

  public read = async (id: string) => {
    const res = await prisma.category.findUnique({
      where: {
        id,
      },
    });
    if (res) {
      return res;
    }
  };

  public save = async (name: string) => {
    const CategotyAllreadExist = await prisma.category.create({ data: { name } });
    console.log(CategotyAllreadExist);
    return CategotyAllreadExist;
  };

  public update = async ({ id, name }: ICategory) => {
    const CategotyAllreadExist = await prisma.category.findUnique({ where: { id } });

    if (CategotyAllreadExist) {
      const updateCategory = await prisma.category.update({ where: { id }, data: { name } });
      if (updateCategory) {
        return { message: 'Atualizado com sucesso', updateCategory };
      } else {
        return { erro: 'Userid nao encontrado' };
      }
    } else {
      return { message: 'Profile não encontrado' };
    }
  };

  public delete = async (id: string) => {
    const CategotyAllreadExist = await prisma.category.findUnique({
      where: {
        id,
      },
    });

    if (CategotyAllreadExist) {
      const deleteCategory = await prisma.category.delete({
        where: {
          id,
        },
      });
      if (deleteCategory) {
        return { erro: 'Profile deletato com sucesso' };
      }
    } else {
      return { message: 'Profile não encontrado' };
    }
  };
}

export default CategoryRepository;
