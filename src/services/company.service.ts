import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from 'src/schemas';
import { CreateCompanyDto } from 'src/dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name)
    private companyModel: Model<Company>,
  ) {}

  createCompany(createCompanyDto: CreateCompanyDto) {
    const newCompany = new this.companyModel(createCompanyDto);
    return newCompany.save();
  }

  getCompanies() {
    return this.companyModel.find();
  }

  getCompanyById(id: string) {
    return this.companyModel.findById(id);
  }
}
