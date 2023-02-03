import { SubDocument } from 'src/types/schemas';

export interface Category extends SubDocument {
  description: string | void;
  name: string;
}
