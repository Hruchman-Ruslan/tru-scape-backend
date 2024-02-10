import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyStatus, CompanyStatusSchema } from 'src/schemas';
import { CompanyStatusService } from 'src/services';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CompanyStatus.name,
        schema: CompanyStatusSchema,
      },
    ]),
  ],
  providers: [CompanyStatusService],
})
export class CompanyStatusModule {}
