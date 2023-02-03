import { Item } from '../item.interface';

type ICreateItemDto = {
  [K in keyof Item]: any;
};

export class CreateItemDto implements ICreateItemDto {
  name: string;
  price: string;
  description: string;
  category: string;
  sale: boolean;
}
