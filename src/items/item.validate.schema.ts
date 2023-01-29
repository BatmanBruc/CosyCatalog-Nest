import * as Joi from 'joi';
import { Item } from './item.interface';

export const createItemValidateSchema = Joi.object<Item>({
  name: Joi.string().required(),
  price: Joi.string().required(),
  description: Joi.string().required(),
});
