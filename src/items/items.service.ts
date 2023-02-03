import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Item } from './item.interface';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
  constructor(
    @Inject('ITEM_MODEL')
    private model: Model<Item>,
  ) {}

  async create(CreateItemDto: CreateItemDto): Promise<Item> {
    const createdItem = new this.model(CreateItemDto);
    return createdItem.save();
  }

  async findAll(): Promise<Item[]> {
    return this.model.find().populate('category').exec();
  }

  async change(id: string, CreateItemDto: CreateItemDto): Promise<Item> {
    const createdItem = await this.model.findById(id);
    await createdItem.update(CreateItemDto);
    return createdItem.save();
  }

  async delete(id: string): Promise<Item> {
    const createdItem = await this.model.findById(id);
    return await createdItem.delete();
  }
}
