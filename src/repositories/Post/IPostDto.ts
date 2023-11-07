import { Category, User } from '@prisma/client';

interface IPostDto {
  id?: string;
  title: string;
  published: boolean;
  author?: User;
  authorId: string;
  categories?: Category[];

}

export default IPostDto;
