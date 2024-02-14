import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CountryController } from 'src/controllers';
import { Country, CountrySchema } from 'src/schemas';
import { CountryService } from 'src/services';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Country.name,
        schema: CountrySchema,
      },
    ]),
  ],
  providers: [CountryService],
  controllers: [CountryController],
})
export class CountryModule {}
