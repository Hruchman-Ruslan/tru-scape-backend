import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import mongoose from 'mongoose';
import { CreateCompanyDto } from 'src/dto';
import { CompanyService } from 'src/services';

@Controller('companies')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  createCompany(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.createCompany(createCompanyDto);
  }

  @Get()
  getCompanies() {
    return this.companyService.getCompanies();
  }

  @Get(':id')
  async getCompanyById(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Company not found', 404);
    const findCompany = await this.companyService.getCompanyById(id);
    if (!findCompany) throw new HttpException('Company not found', 404);
    return findCompany;
  }
}
