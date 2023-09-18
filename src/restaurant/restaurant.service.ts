import { Injectable } from '@nestjs/common';
import { 
  CreateRestaurantDto, 
  Restaurant, 
  RestaurantId,  
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
    return this.restaurantRepository.findOneBy({id : restaurantId.id})
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

  async updateRestaurant(updateRestaurantDto: UpdateRestaurantDto) {
    const { id , ...updateField } = updateRestaurantDto
    const updateRestaurant = await this.restaurantRepository.update({ id },{ ...updateField })
    console.log(updateRestaurant)
    return this.restaurantRepository.findOneBy({ id })
  }

  deleteRestaurant(restaurantId: RestaurantId) {
    this.restaurantRepository.delete({id : restaurantId.id})
    return {}
  }
}
