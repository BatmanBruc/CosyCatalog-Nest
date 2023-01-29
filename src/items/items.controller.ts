import { CreateItemDto } from './dto/create-item.dto';
import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.interface';
import { JoiValidationPipe } from 'src/pipes/joi-validation.pipe';
import { itemValidateSchema } from './item.validate.schema';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get()
  get_all(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Post()
  @UsePipes(new JoiValidationPipe(itemValidateSchema))
  create(@Body() createItemDto: CreateItemDto): void {
    this.itemsService.create(createItemDto);
  }
}
