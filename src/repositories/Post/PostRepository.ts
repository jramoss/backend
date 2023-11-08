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

  public read = async (id: string) => {
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
      },
    });

    if (createPost) {
      return createPost;
    }
    return createPost;
  };

  public update = async ({ id, title, published, authorId }: IPostDto) => {
    const PostAlreadExist = await prisma.post.findUnique({ where: { id } });

    if (PostAlreadExist) {
      const updatedPost = await prisma.post.update({
        where: { id },
        data: { id, title, published, authorId },
      });
      if (updatedPost) {
        return { message: 'Atualizado com sucesso', updatedPost };
      } else {
        return { erro: 'Userid nao encontrado' };
      }
    } else {
      return { message: 'Post não encontrado' };
    }
  };

  public delete = async (id: string) => {
    const PostAlreadExist = await prisma.post.findUnique({
      where: {
        id,
      },
    });

    if (PostAlreadExist) {
      const deletePost = await prisma.post.delete({
        where: {
          id,
        },
      });
      if (deletePost) {
        return { erro: 'Post deletato com sucesso' };
      }
    } else {
      return { message: 'Post não encontrado' };
    }
  };
}

export default PostRepository;
