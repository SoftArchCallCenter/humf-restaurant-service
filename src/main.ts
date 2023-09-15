require('dotenv').config()
import { NestFactory } from '@nestjs/core';
import { Transport } from "@nestjs/microservices";
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: process.env.URL,
      package: 'restuarant',
      protoPath: join(__dirname, '../HUMF_Proto/restaurant.proto'),
    }
  });
  app.listen()
}
bootstrap();
