import { IsNumber, IsOptional, IsString } from 'class-validator';

export class GetPromotionDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  discount: number;

  @IsString()
  companyId: string;

  @IsString()
  companyTitle: string;

  @IsString()
  @IsOptional()
  avatar?: string;
}
