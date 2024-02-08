import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PromotionDocument = HydratedDocument<Promotion>;

@Schema()
export class Promotion {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  discount: number;

  @Prop({ required: true })
  companyId: string;

  @Prop({ required: true })
  companyTitle: string;

  @Prop({ required: false })
  avatar: string;
}

export const PromotionSchema = SchemaFactory.createForClass(Promotion);
