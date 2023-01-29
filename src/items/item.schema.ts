import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
  name: String,
  price: String,
  description: String,
});
