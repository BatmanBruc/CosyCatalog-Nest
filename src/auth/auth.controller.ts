import { User } from './../users/user.interface';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { JoiValidationPipe } from 'src/pipes/joi-validation.pipe';
import { createUserValidateSchema } from 'src/users/user.validate.schema';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}
  @Post()
  signUp(
    @Body(new JoiValidationPipe(createUserValidateSchema))
    createUserDto: CreateUserDto,
  ): Promise<User> {
    return this.service.register(createUserDto);
  }
}
