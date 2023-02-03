import { Category } from '../category.interface';

type ICreateCategoryDto = {
  [K in keyof Category]: any;
};

export class CreateCategoryDto implements ICreateCategoryDto {
  name: string;
  description: string;
}
