import * as mongoose from 'mongoose';
import { FieldsSchema } from 'src/types/schemas';
import { User } from './user.interface';

const fieldSchema: FieldsSchema<User> = {
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
};

export const usersSchema = new mongoose.Schema<User>(fieldSchema, {
  timestamps: true,
});
