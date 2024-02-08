import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SummaryStatsDocument = HydratedDocument<SummaryStats>;

@Schema()
export class SummaryStats {
  @Prop({ required: true })
  promotions: number;

  @Prop({ required: true })
  categories: number;

  @Prop({ required: true })
  newCompanies: number;

  @Prop({ required: true })
  activeCompanies: number;
}

export const SummaryStatsSchema = SchemaFactory.createForClass(SummaryStats);
