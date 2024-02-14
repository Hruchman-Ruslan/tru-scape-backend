import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SummaryStatsController } from 'src/controllers';
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
  controllers: [SummaryStatsController],
})
export class SummaryStatsModule {}
