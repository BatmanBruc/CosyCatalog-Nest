import { SubDocument } from 'src/types/schemas';

export interface Category extends SubDocument {
  name: string;
  description: string | undefined;
}

export interface Item {
  category: Category | undefined;
  name: string;
  price: string;
  description: string | undefined;
  sale: boolean;
}
