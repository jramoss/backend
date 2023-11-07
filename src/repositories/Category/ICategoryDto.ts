import { Post } from '@prisma/client';

interface ICategoryDto {
  id?: string;
  name?: string;
  posts?: Post[];
}

export default ICategoryDto;
