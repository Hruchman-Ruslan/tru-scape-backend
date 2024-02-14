import { Controller, Get, HttpException, Param } from '@nestjs/common';
import mongoose from 'mongoose';
import { CategoryService } from 'src/services';

@Controller('categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  getCategory() {
    return this.categoryService.getCategory();
  }

  @Get(':id')
  async getCategoryById(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Category not found', 404);
    const findCategory = await this.categoryService.getCategoryById(id);
    if (!findCategory) throw new HttpException('Category not found', 404);
    return findCategory;
  }
}
