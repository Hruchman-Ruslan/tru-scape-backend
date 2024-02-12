import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CompanyStatus } from './company-status.schema';

export type CompanyDocument = HydratedDocument<Company>;

@Schema()
export class Company {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  status: CompanyStatus;

  @Prop({ required: true })
  joinedDate: string;

  @Prop({ required: true })
  hasPromotions: boolean;

  @Prop({ required: true })
  categoryId: string;

  @Prop({ required: true })
  categoryTitle: string;

  @Prop({ required: true })
  countryId: string;

  @Prop({ required: true })
  countryTitle: string;

  @Prop({ required: false })
  avatar?: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
