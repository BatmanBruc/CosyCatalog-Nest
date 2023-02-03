import { Module } from '@nestjs/common';
import { ItemsController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { DatabaseModule } from '../database/database.module';
import { categoriesProviders } from './categories.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ItemsController],
  providers: [CategoriesService, ...categoriesProviders],
})
export class CategoriesModule {}
