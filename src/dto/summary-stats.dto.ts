import { IsNumber } from 'class-validator';

export class GetSummaryStatsDto {
  @IsNumber()
  promotions: number;

  @IsNumber()
  categories: number;

  @IsNumber()
  newCompanies: number;

  @IsNumber()
  activeCompanies: number;
}
