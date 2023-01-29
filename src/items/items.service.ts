import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Item } from './item.interface';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
  constructor(
    @Inject('ITEM_MODEL')
    private itemModel: Model<Item>,
  ) {}

  async create(CreateItemDto: CreateItemDto): Promise<Item> {
    const createdItem = new this.itemModel(CreateItemDto);
    return createdItem.save();
  }

  async findAll(): Promise<Item[]> {
    return this.itemModel.find().exec();
  }

  async change(id: string, CreateItemDto: CreateItemDto): Promise<Item> {
    const createdItem = await this.itemModel.findById(id);
    await createdItem.update(CreateItemDto);
    return createdItem.save();
  }

  async delete(id: string): Promise<Item> {
    const createdItem = await this.itemModel.findById(id);
    return await createdItem.delete();
  }
}
