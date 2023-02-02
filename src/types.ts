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
  : T;

type IsRequred<T> = Extract<T, undefined> extends never
  ? true
  : false | undefined;

export type ParamsSchema<T> = {
  [K in keyof T]: T[K] extends SubDocument
    ? {
        type: typeof mongoose.Types.ObjectId;
        ref: string;
      }
    : {
        type: TType<T[K]>;
        required: IsRequred<T[K]>;
        [key: string]: any;
      };
};
