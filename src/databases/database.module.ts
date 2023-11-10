import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantEntity } from '../restaurant/entities/restaurant.entity';
import { MenuEntity } from '../menu/entities/menu.entity';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService ) => ({
        type: 'mysql',
        host: configService.get<string>('RESTAURANT_SERVICE_MYSQL_HOST'),
        port: configService.get<number>('RESTAURANT_SERVICE_MYSQL_PORT'),
        username: configService.get<string>('RESTAURANT_SERVICE_MYSQL_USER'),
        password: configService.get<string>('RESTAURANT_SERVICE_MYSQL_PASSWORD'),
        database: configService.get<string>('RESTAURANT_SERVICE_MYSQL_DATABASE'),
        entities: [RestaurantEntity, MenuEntity],
        synchronize: configService.get<string>('RESTAURANT_SERVICE_NODE_ENV') == 'development',
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
