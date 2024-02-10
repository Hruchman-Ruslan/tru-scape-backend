import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Promotion, PromotionSchema } from 'src/schemas';
import { PromotionService } from 'src/services';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Promotion.name,
        schema: PromotionSchema,
      },
    ]),
  ],
  providers: [PromotionService],
})
export class PromotionModule {}
