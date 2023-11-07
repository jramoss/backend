import { Profile } from '@prisma/client';

interface ProfileRepoDto {
  id?: string;
  bio?: string;
  userId?: string;

  index(): Promise<Profile[] | undefined>;
  read(): Promise<Profile[] | undefined>;
  save(): Promise<Profile[] | undefined>;
  update(): Promise<Profile[] | undefined>;
  delete(): Promise<Profile[] | undefined>;
}

export default ProfileRepoDto;
