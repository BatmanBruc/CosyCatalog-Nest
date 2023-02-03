import * as mongoose from 'mongoose';
import { ObjectId } from 'mongoose';
import { Item } from 'src/items/item.interface';

export interface SubDocument {
  _id?: ObjectId;
}

type TType<T> = Exclude<T | void, void> extends string
  ? typeof String
  : T extends number
  ? typeof Number
  : T extends any[]
  ? typeof Array
  : T extends boolean
  ? typeof Boolean
  : T extends SubDocument
  ? typeof mongoose.Types.ObjectId
  : T;

type IsRequred<T> = Extract<T, void> extends never ? true : false | undefined;

interface Field<T> {
  type: TType<T>;
  required: IsRequred<T>;
  [key: string]: any;
}

interface SubField<T> extends Field<T> {
  ref: string;
}

export type FieldsSchema<T> = {
  [K in keyof T]: Extract<T[K], SubDocument> extends never
    ? Field<T[K]>
    : SubField<T[K]>;
};
