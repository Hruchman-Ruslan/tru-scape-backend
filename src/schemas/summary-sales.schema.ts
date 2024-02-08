import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SummarySalesDocument = HydratedDocument<SummarySales>;

@Schema()
export class SummarySales {
  @Prop({ required: true })
  companyId: string;

  @Prop({ required: true })
  companyTitle: string;

  @Prop({ required: true })
  sold: number;

  @Prop({ required: true })
  income: number;
}

export const SummarySalesSchema = SchemaFactory.createForClass(SummarySales);
