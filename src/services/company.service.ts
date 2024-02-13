import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from 'src/schemas';
import { CreateCompanyDto } from 'src/dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name)
    private companyServiceModel: Model<Company>,
  ) {}

  createCompany(createCompanyDto: CreateCompanyDto) {
    const newCompany = new this.companyServiceModel(createCompanyDto);
    return newCompany.save();
  }

  getCompanies() {
    return this.companyServiceModel.find();
  }

  getCompanyById(id: string) {
    return this.companyServiceModel.findById(id);
  }
}
