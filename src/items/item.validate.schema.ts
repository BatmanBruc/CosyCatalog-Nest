import * as Joi from 'joi';
import { CreateItemDto } from './dto/create-item.dto';
import { ParamsValidate } from 'src/types/validate';

const paramsValidate: ParamsValidate<CreateItemDto> = {
  name: Joi.string().required(),
  price: Joi.string().required(),
  description: Joi.string().required(),
  sale: Joi.boolean().required(),
  category: Joi.string().required(),
};

export const createItemValidateSchema =
  Joi.object<CreateItemDto>(paramsValidate);
