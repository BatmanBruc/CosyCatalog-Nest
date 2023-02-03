import { FieldsSchema } from 'src/types/schemas';
import { Category } from './category.interface';
import * as mongoose from 'mongoose';

const fieldsSchema: FieldsSchema<Category> = {
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
};

export const categorySchema = new mongoose.Schema<Category>(fieldsSchema, {
  timestamps: true,
});
