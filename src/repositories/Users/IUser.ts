import { $Enums } from '@prisma/client';

interface IUser {
  id?: string;
  email: string;
  name: string;
  dNasc: Date;
  role: $Enums.Role;
}

export default IUser;
