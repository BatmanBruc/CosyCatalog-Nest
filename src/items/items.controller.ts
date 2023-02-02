import { CreateItemDto } from './dto/create-item.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.interface';
import { JoiValidationPipe } from '../pipes/joi-validation.pipe';
import { createItemValidateSchema } from './item.validate.schema';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get()
  get_all(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Post()
  @UsePipes(new JoiValidationPipe(createItemValidateSchema))
  create(@Body() createItemDto: CreateItemDto): Promise<any> {
    return this.itemsService.create(createItemDto);
  }

  @Post(':id')
  change(
    @Param('id') id: string,
    @Body(new JoiValidationPipe(createItemValidateSchema))
    createItemDto: CreateItemDto,
  ): Promise<any> {
    return this.itemsService.change(id, createItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<any> {
    return this.itemsService.delete(id);
  }
}
