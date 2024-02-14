import { Controller, Get } from '@nestjs/common';
import { PromotionService } from 'src/services';

@Controller('promotions')
export class PromotionController {
  constructor(private promotionService: PromotionService) {}

  @Get()
  getPromotion() {
    return this.promotionService.getPromotion();
  }
}
