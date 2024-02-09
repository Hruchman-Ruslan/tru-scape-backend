import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import * as dotenv from 'dotenv';

import {
  CategoryModule,
  CompanyModule,
  CompanyStatusModule,
  CountryModule,
  PromotionModule,
  SummarySalesModule,
  SummaryStatsModule,
} from './modules';

dotenv.config();

const { MONGODB_URI } = process.env;

@Module({
  imports: [
    MongooseModule.forRoot(MONGODB_URI),
    CategoryModule,
    CompanyStatusModule,
    CompanyModule,
    CountryModule,
    PromotionModule,
    SummarySalesModule,
    SummaryStatsModule,
  ],
})
export class AppModule {}
