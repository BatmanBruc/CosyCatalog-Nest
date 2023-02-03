import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Category } from './category.interface';
import { CreateCategoryDto } from './dto/create-item.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject('CATEGORY_MODEL')
    private categoryModel: Model<Category>,
  ) {}

  async create(CreateCategoryDto: CreateCategoryDto): Promise<Category> {
    const createdCategory = new this.categoryModel(CreateCategoryDto);
    return createdCategory.save();
  }

  async findAll(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  async change(
    id: string,
    CreateCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    const createdCategory = await this.categoryModel.findById(id);
    await createdCategory.update(CreateCategoryDto);
    return createdCategory.save();
  }

  async delete(id: string): Promise<Category> {
    const createdCategory = await this.categoryModel.findById(id);
    return await createdCategory.delete();
  }
}
