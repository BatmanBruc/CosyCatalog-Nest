import { Category } from 'src/caregories/category.interface';

export interface Item {
  category: Category | void;
  name: string;
  price: string;
  description: string | void;
  sale: boolean;
}
