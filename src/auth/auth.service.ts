import { UsersService } from './../users/users.service';
import { CreateUserDto } from './../users/dto/create-user.dto';
import { Model } from 'mongoose';
import bcrypt from 'bcrypt';
import { Injectable, Inject } from '@nestjs/common';
import { User } from 'src/users/user.interface';

const salt_rounds_for_bcrypt = 10;

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  password_hash(password): string {
    return bcrypt.hashSync(password, salt_rounds_for_bcrypt);
  }

  verify_password(password: string, password_checker: string): boolean {
    return bcrypt.compareSync(password, password_checker);
  }

  register(createUserDto: CreateUserDto): Promise<User> {
    createUserDto.password = this.password_hash(createUserDto.password);
    return this.usersService.createUser(createUserDto);
  }
}
