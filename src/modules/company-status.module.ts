import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyStatus, CompanyStatusSchema } from 'src/schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CompanyStatus.name,
        schema: CompanyStatusSchema,
      },
    ]),
  ],
})
export class CompanyStatusModule {}
