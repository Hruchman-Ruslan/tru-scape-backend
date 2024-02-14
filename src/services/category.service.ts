import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from 'src/schemas';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  getCategory() {
    return this.categoryModel.find();
  }

  getCategoryById(id: string) {
    return this.categoryModel.findById(id);
  }
}
