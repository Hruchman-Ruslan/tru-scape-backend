import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SummarySales } from 'src/schemas';

@Injectable()
export class SummarySalesService {
  constructor(
    @InjectModel(SummarySales.name)
    private SummarySalesModel: Model<SummarySales>,
  ) {}
}
