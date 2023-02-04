import { Connection } from 'mongoose';
import { usersSchema } from './user.schema';

export const usersProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('User', usersSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
