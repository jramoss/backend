import { $Enums } from '@prisma/client';

interface IuserDto {
  id: string;
  email?: string;
  name?: string;
  dNasc?: Date;
  role?: $Enums.Role;
}

export default IuserDto;
