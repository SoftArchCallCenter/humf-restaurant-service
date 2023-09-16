require('dotenv').config()
import { Module } from '@nestjs/common';
import { RestaurantModule } from './restaurant/restaurant.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [RestaurantModule, TypeOrmModule.forRoot({
    type: 'mariadb',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_HOST_PASSWORD,
    database: "softArch",
    entities: [],
    synchronize: true,
  })],
})
export class AppModule {}
