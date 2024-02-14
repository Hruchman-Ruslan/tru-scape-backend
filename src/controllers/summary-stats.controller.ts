import { Controller, Get } from '@nestjs/common';
import { SummaryStatsService } from 'src/services';

@Controller('summary-stats')
export class SummaryStatsController {
  constructor(private summaryStatsService: SummaryStatsService) {}

  @Get()
  getSummaryStats() {
    return this.summaryStatsService.getSummaryStats();
  }
}
