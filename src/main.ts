require('dotenv').config()
import { NestFactory } from '@nestjs/core';
import { Transport } from "@nestjs/microservices";
import { AppModule } from './app.module';
import { join } from 'path';
import { RESTAURANT_PACKAGE_NAME } from '../humf-proto/build/proto/restaurant';
import { MENU_PACKAGE_NAME } from '../humf-proto/build/proto/menu';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: process.env.URL,
      package: [RESTAURANT_PACKAGE_NAME,MENU_PACKAGE_NAME],
      protoPath: [
        join(__dirname, '../proto/restaurant.proto'),
        join(__dirname, '../proto/menu.proto'),
      ],
    }
  });
  app.listen()
}
bootstrap();
