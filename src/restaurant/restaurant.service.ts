import { Injectable } from '@nestjs/common';
import { 
  CreateRestaurantDto, 
  FilterRestaurantDto, 
  RestaurantId,  
  UpdateRestaurantDto, 
  UserIdDto
} from '../../humf-proto/build/proto/restaurant'
import { InjectRepository } from '@nestjs/typeorm';
import { RestaurantEntity } from './entities/restaurant.entity';
import { Repository } from 'typeorm';
import { MenuEntity } from 'src/menu/entities/menu.entity';

@Injectable()
export class RestaurantService {

  constructor(
    @InjectRepository(RestaurantEntity) private restaurantRepository: Repository<RestaurantEntity>,
    @InjectRepository(MenuEntity) private menuRepository: Repository<MenuEntity>,
  ) {}

  async getAllRestaurant(){
    const restaurant = await this.restaurantRepository.find()
    return {Restaurant : restaurant}
  }

  async getRestaurant(restaurantId: RestaurantId) {
    return this.restaurantRepository.findOneBy({id : restaurantId.id})
  }

  getRestaurantByUserId(userId: UserIdDto) {
    return this.restaurantRepository.findOneBy({userId : userId.id})
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
    // console.log(updateRestaurant)
    return this.restaurantRepository.findOneBy({ id })
  }

  deleteRestaurant(restaurantId: RestaurantId) {
    this.restaurantRepository.delete({id : restaurantId.id})
    this.menuRepository.delete({resId: restaurantId.id})
    return {}
  }
}
