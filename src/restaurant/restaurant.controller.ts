import { Controller } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import {
  CreateRestaurantDto,
  RestaurantId,
  RestaurantGrpcServiceController, 
  RestaurantGrpcServiceControllerMethods, 
  UpdateRestaurantDto
} from '../../HUMF_Proto/build/proto/restaurant'
;

@Controller()
@RestaurantGrpcServiceControllerMethods()
export class RestaurantController implements RestaurantGrpcServiceController{
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
