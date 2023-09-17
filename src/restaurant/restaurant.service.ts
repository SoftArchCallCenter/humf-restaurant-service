import { Injectable } from '@nestjs/common';
import { 
  CreateRestaurantDto, 
  Restaurant, 
  RestaurantId, 
  RestaurantList, 
  UpdateRestaurantDto 
} from '../../HUMF_Proto/build/proto/restaurant'
import { InjectRepository } from '@nestjs/typeorm';
import { RestaurantEntity } from './model/Restaurant';
import { Repository } from 'typeorm';

@Injectable()
export class RestaurantService {

  constructor(
    @InjectRepository(RestaurantEntity) private restaurantRepository: Repository<RestaurantEntity>,
  ) {}

  async getAllRestaurant(){
    const restaurant = await this.restaurantRepository.find()
    return {Restaurant : restaurant}
  }

  async getRestaurant(restaurantId: RestaurantId) {

    const resId = restaurantId.id.toString()
    const result = await this.restaurantRepository.findOneBy({id : parseInt(resId)})

    return result
  }

  addRestaurant (createRestaurantDto: CreateRestaurantDto)  {
    const currentDate = new Date()

    let newRestaurant = this.restaurantRepository.create({
      ...createRestaurantDto,
      createAt: currentDate,
      updateAt: currentDate,
    })

    return this.restaurantRepository.save(newRestaurant)
  }

  updateRestaurant(updateRestaurantDto: UpdateRestaurantDto) {
    const result : Restaurant = {
      id: 1,
      name: "string",
      openTime: "string",
      closeTime: "string",
      address: "string",
    }
    return result
  }

  deleteRestaurant(restaurantId: RestaurantId) {
    const result : Restaurant = {
      id: 1,
      name: "string",
      openTime: "string",
      closeTime: "string",
      address: "string",
    }
    return result
  }
}
