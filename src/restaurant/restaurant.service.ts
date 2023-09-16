import { Injectable } from '@nestjs/common';
import { Restaurant, RestaurantId, RestaurantList } from '../../HUMF_Proto/build/proto/restaurant'

@Injectable()
export class RestaurantService {

  getAllRestaurant(){
    const restaurants : RestaurantList = {
      Restaurant : []
    }
    return restaurants
  }

  getRestaurant(restaurantId: RestaurantId) {
    const result : Restaurant = {
      id: "string",
      name: "string",
      openTime: "string",
      closeTime: "string",
      address: "string",
    }
    return result
  }

  addRestaurant(restaurant: Restaurant) {
    const result : Restaurant = {
      id: "string",
      name: "string",
      openTime: "string",
      closeTime: "string",
      address: "string",
    }
    return result 
  }

  updateRestaurant(restaurant: Restaurant) {
    const result : Restaurant = {
      id: "string",
      name: "string",
      openTime: "string",
      closeTime: "string",
      address: "string",
    }
    return result 
  }

  deleteRestaurant(restaurantId: RestaurantId) {
    const result : Restaurant = {
      id: "string",
      name: "string",
      openTime: "string",
      closeTime: "string",
      address: "string",
    }
    return result
  }
}
