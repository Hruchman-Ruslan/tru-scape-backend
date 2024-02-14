import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SummarySales } from 'src/schemas';

@Injectable()
export class SummarySalesService {
  constructor(
    @InjectModel(SummarySales.name)
    private summarySalesModel: Model<SummarySales>,
  ) {}

  getSummarySales() {
    return this.summarySalesModel.find();
  }
}
