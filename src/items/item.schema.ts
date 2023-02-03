import { FieldsSchema } from 'src/types/schemas';
import { Item } from './item.interface';
import * as mongoose from 'mongoose';

const fieldsSchema: FieldsSchema<Item> = {
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
  category: {
    type: mongoose.Types.ObjectId,
    required: false,
    ref: 'Category',
  },
  sale: {
    type: Boolean,
    required: true,
  },
};

export const ItemSchema = new mongoose.Schema<Item>(fieldsSchema, {
  timestamps: true,
});
