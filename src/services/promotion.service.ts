import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Promotion } from 'src/schemas';

@Injectable()
export class PromotionService {
  constructor(
    @InjectModel(Promotion.name)
    private PromotionModel: Model<Promotion>,
  ) {}
}
