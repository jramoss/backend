import prisma from '../../config/database/prisma';
import ICategory from './ICategory';
import ICategoryDto from './ICategoryDto';

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

  public save = async ({ name, posts }: ICategoryDto) => {
    const CategotyAlreadExist = await prisma.category.findMany({ where: { name } });
    if (!CategotyAlreadExist) {
      return { erro: 'Categoty AlreadExist' };
    }
    const CategotyCreate = await prisma.category.create({
      data: {
        name,
        posts: { create: posts },
      },
    });
    if (CategotyCreate) {
      return { message: 'Categoria Cadastrada com sucesso\n', CategotyCreate };
    }
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
      return { message: 'Category não encontrado' };
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
        return { erro: 'Category deletato com sucesso' };
      }
    } else {
      return { message: 'Category não encontrado' };
    }
  };
}

export default CategoryRepository;
