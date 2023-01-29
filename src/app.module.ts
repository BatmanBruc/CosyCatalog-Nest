import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ItemsModule],
})
export class AppModule {}
