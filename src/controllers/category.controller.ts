import { Controller, Get } from '@nestjs/common';
import { CategoryService } from 'src/services';

@Controller('categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  getCategory() {
    return this.categoryService.getCategory();
  }
}
