require('dotenv').config()
import { NestFactory } from '@nestjs/core';
import { Transport } from "@nestjs/microservices";
import { AppModule } from './app.module';
import { join } from 'path';
import { RESTAURANT_PACKAGE_NAME } from '../HUMF_Proto/build/proto/restaurant';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: process.env.URL,
      package: RESTAURANT_PACKAGE_NAME,
      protoPath: join(__dirname, '../HUMF_Proto/restaurant.proto'),
    }
  });
  app.listen()
}
bootstrap();
