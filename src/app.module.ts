require('dotenv').config()
import { Module } from '@nestjs/common';
import { RestaurantModule } from './restaurant/restaurant.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantEntity } from './restaurant/entities/restaurant.entity';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [RestaurantModule, MenuModule, 
    TypeOrmModule.forRootAsync({
      useFactory:async () => ({
        type: 'mysql',
        host: process.env.MYSQL_HOST,
        port: parseInt(process.env.MYSQL_PORT),
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        entities: [RestaurantEntity],
        synchronize: process.env.NODE_ENV === 'development',
      })
  })],
})
export class AppModule {}
