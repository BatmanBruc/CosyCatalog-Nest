import { CreateItemDto } from './dto/create-item.dto';
import * as Joi from 'joi';

export const createItemValidateSchema = Joi.object<CreateItemDto>({
  name: Joi.string().required(),
  price: Joi.string().required(),
  description: Joi.string().required(),
});
