import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SummarySales, SummarySalesSchema } from 'src/schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: SummarySales.name,
        schema: SummarySalesSchema,
      },
    ]),
  ],
})
export class SummarySalesModule {}
