import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SummaryStats, SummaryStatsSchema } from 'src/schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: SummaryStats.name,
        schema: SummaryStatsSchema,
      },
    ]),
  ],
})
export class SummaryStatsModule {}
