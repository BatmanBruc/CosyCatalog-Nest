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
  constructor(private service: ItemsService) {}

  @Get()
  get_all(): Promise<Item[]> {
    return this.service.findAll();
  }

  @Post()
  @UsePipes(new JoiValidationPipe(createItemValidateSchema))
  create(@Body() createItemDto: CreateItemDto): Promise<any> {
    return this.service.create(createItemDto);
  }

  @Post(':id')
  change(
    @Param('id') id: string,
    @Body(new JoiValidationPipe(createItemValidateSchema))
    createItemDto: CreateItemDto,
  ): Promise<any> {
    return this.service.change(id, createItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<any> {
    return this.service.delete(id);
  }
}
