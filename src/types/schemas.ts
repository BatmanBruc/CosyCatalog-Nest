import * as mongoose from 'mongoose';
import { ObjectId } from 'mongoose';

export interface SubDocument {
  _id: ObjectId;
}

type TType<T> = NonNullable<T> extends string
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

type IsRequred<T> = Extract<T, undefined> extends never
  ? true
  : false | undefined;

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
