import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantController } from './restaurant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantEntity } from './model/Restaurant';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantEntity])],
  controllers: [RestaurantController],
  providers: [RestaurantService],
})
export class RestaurantModule {}
