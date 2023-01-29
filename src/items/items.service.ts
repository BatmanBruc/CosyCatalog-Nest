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
    const createdCat = new this.itemModel(CreateItemDto);
    return createdCat.save();
  }

  async findAll(): Promise<Item[]> {
    return this.itemModel.find().exec();
  }
}
