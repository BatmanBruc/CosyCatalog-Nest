import { SubDocument } from 'src/types';

export interface Catgory extends SubDocument {
  name: string;
  description: string | undefined;
}

export interface Item {
  date: typeof Date;
  category: Catgory;
  name: string;
  price: string;
  description: string | undefined;
}
