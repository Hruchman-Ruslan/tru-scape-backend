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

// import {
//   CategoryService,
//   CompanyService,
//   CompanyStatusService,
//   CountryService,
//   PromotionService,
//   SummarySalesService,
//   SummaryStatsService,
// } from './services';

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
  // providers: [
  //   CategoryService,
  //   CompanyStatusService,
  //   CompanyService,
  //   CountryService,
  //   PromotionService,
  //   SummarySalesService,
  //   SummaryStatsService,
  // ],
})
export class AppModule {}
