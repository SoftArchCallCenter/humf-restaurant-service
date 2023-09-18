import { Controller } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import {
  CreateRestaurantDto,
  RestaurantId,
  RestaurantServiceController, 
  RestaurantServiceControllerMethods, 
  UpdateRestaurantDto
} from '../../HUMF_Proto/build/proto/restaurant'
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
