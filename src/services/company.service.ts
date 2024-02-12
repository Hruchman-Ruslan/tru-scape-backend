import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from 'src/schemas';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name)
    private companyServiceModel: Model<Company>,
  ) {}
}
