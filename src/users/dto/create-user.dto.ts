import { User } from '../user.interface';

type ICreateUserDto = {
  [K in keyof User]: any;
};

export class CreateUserDto implements ICreateUserDto {
  login: string;
  password: string;
  email: string;
}
