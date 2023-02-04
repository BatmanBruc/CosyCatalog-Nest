import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private model: Model<User>,
  ) {}
}
