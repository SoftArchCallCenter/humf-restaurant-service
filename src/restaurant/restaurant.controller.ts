import { Controller } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import {
  Restaurant,
  RestaurantId,
  RestaurantServiceController, 
  RestaurantServiceControllerMethods 
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

  addRestaurant(restaurant: Restaurant) {
    return this.restaurantService.addRestaurant(restaurant)
  }

  updateRestaurant(restaurant: Restaurant) {
    return this.restaurantService.updateRestaurant(restaurant)
  }

  deleteRestaurant(restaurantId: RestaurantId) {
    return this.restaurantService.deleteRestaurant(restaurantId)
  }
}
