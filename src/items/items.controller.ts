import { CreateItemDto } from './dto/create-item.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.interface';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get()
  get_all(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): void {
    this.itemsService.create(createItemDto);
  }
}
