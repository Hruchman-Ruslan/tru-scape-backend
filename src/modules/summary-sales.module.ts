import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SummarySales, SummarySalesSchema } from 'src/schemas';
import { SummarySalesService } from 'src/services';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: SummarySales.name,
        schema: SummarySalesSchema,
      },
    ]),
  ],
  providers: [SummarySalesService],
})
export class SummarySalesModule {}
