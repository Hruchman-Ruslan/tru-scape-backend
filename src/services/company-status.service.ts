import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CompanyStatus } from 'src/schemas';

@Injectable()
export class CompanyStatusService {
  constructor(
    @InjectModel(CompanyStatus.name)
    private companyStatusModel: Model<CompanyStatus>,
  ) {}
}
