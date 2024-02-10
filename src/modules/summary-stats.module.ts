import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SummaryStats, SummaryStatsSchema } from 'src/schemas';
import { SummaryStatsService } from 'src/services';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: SummaryStats.name,
        schema: SummaryStatsSchema,
      },
    ]),
  ],
  providers: [SummaryStatsService],
})
export class SummaryStatsModule {}
