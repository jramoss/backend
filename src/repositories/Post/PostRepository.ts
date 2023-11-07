import prisma from '../../config/database/prisma';
import IPostDto from './IPostDto';

class PostRepository {
  public index = async () => {
    const posts = await prisma.post.findMany();
    if (posts) {
      return posts;
    }
    return;
  };

  public read = async (id: string)=> {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
    });
    if (post) {
      return post;
    }
  };

  public save = async ({ title, published, authorId }: IPostDto) => {
    const createPost = await prisma.post.create({
      data: {
        title,
        published,
        authorId,
      }
    });

    if (createPost) {
      console.log(createPost);
      return createPost;
    }
    return createPost;
  };

  public update = async ({ id, title, published, authorId }: IPostDto) => {
    const ProfileAllreadExist = await prisma.post.findUnique({ where: { id } });

    if (ProfileAllreadExist) {
      const updatedProfile = await prisma.post.update({
        where: { id },
        data: { id, title, published, authorId },
      });
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
    const ProfileAllreadExist = await prisma.post.findUnique({
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

export default PostRepository;
