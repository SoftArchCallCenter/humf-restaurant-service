require('dotenv').config()
import { NestFactory } from '@nestjs/core';
import { Transport } from "@nestjs/microservices";
import { AppModule } from './app.module';
import { join } from 'path';
import { RESTAURANT_PACKAGE_NAME } from '../humf-proto/build/proto/restaurant';
import { MENU_PACKAGE_NAME } from '../humf-proto/build/proto/menu';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      url: configService.get<string>('RESTAURANT_SERVICE_URL'),
      package: [RESTAURANT_PACKAGE_NAME,MENU_PACKAGE_NAME],
      protoPath: [
        join(__dirname, '../proto/restaurant.proto'),
        join(__dirname, '../proto/menu.proto'),
      ],
    }
  });
  app.startAllMicroservices();
}
bootstrap();
