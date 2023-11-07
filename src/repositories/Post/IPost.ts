import { Category, User } from '@prisma/client';

interface IPost {
  id?: string;
  title: string;
  published?: boolean;
  author: User;
  authorId: string;
  categories: Category[];
}

export default IPost;
