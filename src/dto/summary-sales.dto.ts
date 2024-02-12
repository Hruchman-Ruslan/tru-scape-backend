import { IsNumber, IsString } from 'class-validator';

export class GetSummarySalesDto {
  @IsString()
  companyId: string;

  @IsString()
  companyTitle: string;

  @IsNumber()
  sold: number;

  @IsNumber()
  income: number;
}
