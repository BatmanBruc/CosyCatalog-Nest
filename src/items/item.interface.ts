import { SubDocument } from 'src/types';

export interface Category extends SubDocument {
  name: string;
  description: string | undefined;
}

export interface Item {
  date: typeof Date;
  category: Category | undefined;
  name: string;
  price: string;
  description: string | undefined;
}
