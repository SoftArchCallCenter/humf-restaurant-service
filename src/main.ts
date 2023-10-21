require('dotenv').config()
import { NestFactory } from '@nestjs/core';
import { Transport } from "@nestjs/microservices";
import { AppModule } from './app.module';
import { join } from 'path';
import { RESTAURANT_PACKAGE_NAME } from '../humf-proto/build/proto/restaurant';
import { MENU_SERVICE_NAME } from 'humf-proto/build/proto/menu';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: process.env.URL,
      package: [RESTAURANT_PACKAGE_NAME,MENU_SERVICE_NAME],
      protoPath: join(__dirname, '../proto/restaurant.proto'),
    }
  });
  app.listen()
}
bootstrap();
