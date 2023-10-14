import { Injectable } from '@nestjs/common';
import { 
  CreateRestaurantDto, 
  FilterRestaurantDto, 
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

  async filterRestaurant(filterRestaurantDto: FilterRestaurantDto) {
    //  waiting to implement fileterRestaurant
    const restaurant = await this.restaurantRepository.find()
    return {Restaurant : restaurant}
  }

  async addRestaurant (createRestaurantDto: CreateRestaurantDto)  {
    const currentDate = new Date()

    let newRestaurant = this.restaurantRepository.create({
      ...createRestaurantDto,
      createAt: currentDate,
      updateAt: currentDate,
    })
    const addedRestaurant = await this.restaurantRepository.save(newRestaurant)

    return this.restaurantRepository.findOneBy({ id : addedRestaurant.id })
  }

  async updateRestaurant(updateRestaurantDto: UpdateRestaurantDto) {
    const updateAt = new Date()
    const { id , ...updateField } = updateRestaurantDto
    const updateRestaurant = await this.restaurantRepository.update({ id },{
       ...updateField,
       updateAt
      })
    console.log(updateRestaurant)
    return this.restaurantRepository.findOneBy({ id })
  }

  deleteRestaurant(restaurantId: RestaurantId) {
    this.restaurantRepository.delete({id : restaurantId.id})
    return {}
  }
}
