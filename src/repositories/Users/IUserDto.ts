import { $Enums } from '@prisma/client';

interface IuserDto {
  id: string;
  email?: string;
  name?: string;
  dateNasc: Date;
  role?: $Enums.Role;
}

export default IuserDto ;
