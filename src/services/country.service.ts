import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Country } from 'src/schemas';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country.name)
    private CountryModel: Model<Country>,
  ) {}
}
