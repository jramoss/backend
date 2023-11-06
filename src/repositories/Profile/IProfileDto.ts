import { Profile } from "@prisma/client";

interface ProfileRepoDto {
  id?: string;
  bio?: string;
  userId?: string;
  
  index ():Promise<Profile[] | undefined>
}

export default ProfileRepoDto;
