import { RefDocument } from 'src/types/schemas';

export interface Category extends RefDocument {
  description: string | void;
  name: string;
}
