import { Connection } from 'mongoose';
import { categorySchema } from './category.schema';

export const itemsProviders = [
  {
    provide: 'ITEM_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Item', categorySchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
