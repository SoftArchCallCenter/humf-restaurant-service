import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MenuService } from './menu.service';
// import { CreateMenuDto } from './dto/create-menu.dto';
// import { UpdateMenuDto } from './dto/update-menu.dto';
import {
  MenuId,
  MenuServiceController, 
  MenuServiceControllerMethods,
  CreateMenuDto,
  UpdateMenuDto,
  RestaurantId
} from '../../humf-proto/build/proto/menu'
;

@Controller()
@MenuServiceControllerMethods()
export class MenuController implements MenuServiceController{
  constructor(private readonly menuService: MenuService) {}

  getAllMenu() {
    return this.menuService.getAllMenu()
  }

  getMenu(menuId: MenuId) {
    return this.menuService.getMenu(menuId)
  }

  getAllMenuByRestaurant(resId : RestaurantId) {
    return this.menuService.getAllMenuByRestaurant(resId)
  }

  createMenu(createMenuDto: CreateMenuDto) {
    return this.menuService.createMenu(createMenuDto)
  }

  updateMenu(updateMenuDto: UpdateMenuDto) {
    return this.menuService.updateMenu(updateMenuDto)
  }

  deleteMenu(menuId: MenuId) {
    return this.menuService.deleteMenu(menuId)
  }
}
