import { Controller, Get } from '@nestjs/common';
import { CountryService } from 'src/services';

@Controller('countries')
export class CountryController {
  constructor(private countryService: CountryService) {}

  @Get()
  getCountry() {
    return this.countryService.getCountry();
  }
}
