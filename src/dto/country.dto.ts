import { IsString } from 'class-validator';

export class GetCountryDto {
  @IsString()
  title: string;
}
