import { Connection } from 'mongoose';
import { categorySchema } from './category.schema';

export const categoriesProviders = [
  {
    provide: 'CATEGORY_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Category', categorySchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
