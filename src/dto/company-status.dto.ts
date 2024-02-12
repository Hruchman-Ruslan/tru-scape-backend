import { IsEnum } from 'class-validator';
import { Status } from 'src/schemas';

export class GetCompanyStatusDto {
  @IsEnum(Status)
  status: Status;
}
