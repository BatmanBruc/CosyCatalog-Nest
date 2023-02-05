import * as Joi from 'joi';
import { CreateUserDto } from './dto/create-user.dto';
import { ParamsValidate } from 'src/types/validate';

const paramsValidate: ParamsValidate<CreateUserDto> = {
  login: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().required(),
};

export const createUserValidateSchema =
  Joi.object<CreateUserDto>(paramsValidate);
