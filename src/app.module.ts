import { Module } from '@nestjs/common';
import { RestaurantModule } from './restaurant/restaurant.module';
import { MenuModule } from './menu/menu.module';
import { DatabaseModule } from './databases/database.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    RestaurantModule, 
    MenuModule, 
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RESTAURANT_SERVICE_MYSQL_HOST: Joi.string().required(),
        RESTAURANT_SERVICE_MYSQL_USER: Joi.string().required(),
        RESTAURANT_SERVICE_MYSQL_ROOT_PASSWORD: Joi.string().required(),
        RESTAURANT_SERVICE_MYSQL_DATABASE: Joi.string().required(),
        RESTAURANT_SERVICE_MYSQL_PORT: Joi.string().required(),
        RESTAURANT_SERVICE_MYSQL_PASSWORD: Joi.string().required(),
        RESTAURANT_SERVICE_NODE_ENV: Joi.string().required(),
      }),
      envFilePath: './.env',
    }),
    ],
})
export class AppModule {}
