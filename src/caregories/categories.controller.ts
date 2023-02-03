import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-item.dto';
import { CategoriesService } from './categories.service';
import { Category } from './category.interface';
import { JoiValidationPipe } from '../pipes/joi-validation.pipe';
import { createCategoryValidateSchema } from './category.validate.schema';

@Controller('categories')
export class ItemsController {
  constructor(private service: CategoriesService) {}

  @Get()
  get_all(): Promise<Category[]> {
    return this.service.findAll();
  }

  @Post()
  @UsePipes(new JoiValidationPipe(createCategoryValidateSchema))
  create(@Body() createDto: CreateCategoryDto): Promise<any> {
    return this.service.create(createDto);
  }

  @Post(':id')
  change(
    @Param('id') id: string,
    @Body(new JoiValidationPipe(createCategoryValidateSchema))
    createDto: CreateCategoryDto,
  ): Promise<any> {
    return this.service.change(id, createDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<any> {
    return this.service.delete(id);
  }
}
