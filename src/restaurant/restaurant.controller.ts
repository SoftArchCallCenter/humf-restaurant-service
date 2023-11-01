import { Controller } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import {
  CreateRestaurantDto,
  FilterRestaurantDto,
  RestaurantId,
  RestaurantServiceController, 
  RestaurantServiceControllerMethods, 
  UpdateRestaurantDto,
  UserIdDto
} from '../../humf-proto/build/proto/restaurant'
;

@Controller()
@RestaurantServiceControllerMethods()
export class RestaurantController implements RestaurantServiceController{
  constructor(private readonly restaurantService: RestaurantService) {}

  getAllRestaurant() {
    return this.restaurantService.getAllRestaurant()
  }

  getRestaurant(restaurantId: RestaurantId) {
    return this.restaurantService.getRestaurant(restaurantId)
  }

  getRestaurantByUserId(userId: UserIdDto) {
    return this.restaurantService.getRestaurantByUserId(userId)
  }

  filterRestaurant(filterRestaurantDto: FilterRestaurantDto) {
    return this.restaurantService.filterRestaurant(filterRestaurantDto)
  }

  addRestaurant(createRestaurantDto: CreateRestaurantDto) {
    return this.restaurantService.addRestaurant(createRestaurantDto)
  }

  updateRestaurant(updateRestaurantDto: UpdateRestaurantDto) {
    return this.restaurantService.updateRestaurant(updateRestaurantDto)
  }

  deleteRestaurant(restaurantId: RestaurantId) {
    return this.restaurantService.deleteRestaurant(restaurantId)
  }
}
