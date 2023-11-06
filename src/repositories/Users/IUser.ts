import { $Enums } from '@prisma/client';

interface IUser {
  id?: string;
  email: string;
  name: string;
  dateNasc: Date;
  role: $Enums.Role;
}

export default IUser;
