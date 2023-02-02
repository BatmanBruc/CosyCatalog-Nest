import { ParamsSchema } from 'src/types';
import { Item } from './item.interface';
import * as mongoose from 'mongoose';

const paramsSchema: ParamsSchema<Item> = {
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: true,
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: 'Category',
  },
};

export const ItemSchema = new mongoose.Schema<Item>(paramsSchema);
