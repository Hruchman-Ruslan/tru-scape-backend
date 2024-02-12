import { IsBoolean, IsEnum, IsString } from 'class-validator';
import { Status } from 'src/schemas';

export class CreateCompanyDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsEnum(Status)
  status: Status;

  @IsString()
  joinedDate: string;

  @IsBoolean()
  hasPromotions: boolean;

  @IsString()
  categoryId: string;

  @IsString()
  categoryTitle: string;

  @IsString()
  countryId: string;

  @IsString()
  countryTitle: string;

  @IsString()
  avatar?: string;
}
