import * as Joi from 'joi';
import { CreateCategoryDto } from './dto/create-item.dto';
import { ParamsValidate } from 'src/types/validate';

const paramsValidate: ParamsValidate<CreateCategoryDto> = {
  name: Joi.string().required(),
  description: Joi.string(),
};

export const createCategoryValidateSchema =
  Joi.object<CreateCategoryDto>(paramsValidate);
