import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { CategoriesModule } from './caregories/categories.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ItemsModule, CategoriesModule],
})
export class AppModule {}
