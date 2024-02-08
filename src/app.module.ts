import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import * as dotenv from 'dotenv';

dotenv.config();

const { MONGODB_URI } = process.env;

@Module({
  imports: [MongooseModule.forRoot(MONGODB_URI)],
})
export class AppModule {}
