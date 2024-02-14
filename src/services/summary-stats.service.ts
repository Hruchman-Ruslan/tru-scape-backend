import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SummaryStats } from 'src/schemas';

@Injectable()
export class SummaryStatsService {
  constructor(
    @InjectModel(SummaryStats.name)
    private summaryStatsModel: Model<SummaryStats>,
  ) {}

  getSummaryStats() {
    return this.summaryStatsModel.find();
  }
}
