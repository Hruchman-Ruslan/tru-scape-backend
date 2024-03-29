import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CountryDocument = HydratedDocument<Country>;

@Schema()
export class Country {
  @Prop({ required: true })
  title: string;
}

export const CountrySchema = SchemaFactory.createForClass(Country);
