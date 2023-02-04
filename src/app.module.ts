import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { CategoriesModule } from './caregories/categories.module';
import { UsersModule } from './users/users.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ItemsModule, CategoriesModule, UsersModule],
})
export class AppModule {}
