import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Category } from './category.interface';
import { CreateCategoryDto } from './dto/create-item.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject('CATEGORY_MODEL')
    private model: Model<Category>,
  ) {}

  async create(CreateCategoryDto: CreateCategoryDto): Promise<Category> {
    const createdCategory = new this.model(CreateCategoryDto);
    return createdCategory.save();
  }

  async findAll(): Promise<Category[]> {
    return this.model.find().exec();
  }

  async change(
    id: string,
    CreateCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    const createdCategory = await this.model.findById(id);
    await createdCategory.update(CreateCategoryDto);
    return createdCategory.save();
  }

  async delete(id: string): Promise<Category> {
    const createdCategory = await this.model.findById(id);
    return await createdCategory.delete();
  }
}
