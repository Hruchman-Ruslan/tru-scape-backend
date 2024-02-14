import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PromotionController } from 'src/controllers';
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
  controllers: [PromotionController],
})
export class PromotionModule {}
