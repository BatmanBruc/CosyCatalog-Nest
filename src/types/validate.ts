import {
  StringSchema,
  ArraySchema,
  NumberSchema,
  BooleanSchema,
  ObjectSchema,
  AnySchema,
} from 'joi';

type TValidateType<T> = NonNullable<T> extends string
  ? StringSchema
  : T extends number
  ? NumberSchema
  : T extends any[]
  ? ArraySchema
  : T extends boolean
  ? BooleanSchema
  : T extends object
  ? ObjectSchema
  : AnySchema;

export type ParamsValidate<T> = {
  [K in keyof T]: TValidateType<T[K]>;
};
