import { RefDocument } from './../types/schemas';

export interface User extends RefDocument {
  login: string;
  password: string;
  email: string;
}
