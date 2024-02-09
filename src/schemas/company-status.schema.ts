import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export enum Status {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}

export type CompanyStatusDocument = HydratedDocument<CompanyStatus>;

@Schema()
export class CompanyStatus {
  @Prop({ enum: Status, default: Status.Pending, required: true })
  status: Status;
}

export const CompanyStatusSchema = SchemaFactory.createForClass(CompanyStatus);
