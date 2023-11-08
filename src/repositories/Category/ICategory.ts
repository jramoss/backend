import { Post } from "@prisma/client";

interface ICategory {
  id?:    string;
  name?:  string;
  posts: Post[];
  
}

export default ICategory;
