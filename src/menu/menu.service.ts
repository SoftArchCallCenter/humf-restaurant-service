import { Injectable } from '@nestjs/common';
import { MenuId, RestaurantId, CreateMenuDto, UpdateMenuDto } from 'humf-proto/build/proto/menu';
import { MenuEntity } from './entities/menu.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MenuService {

  constructor(
    @InjectRepository(MenuEntity) private menuRepository: Repository<MenuEntity>,
  ) {}

  async getAllMenu(){
    const menu = await this.menuRepository.find()
    return {Menu : menu}
  }

  async getMenu(menuId: MenuId) {
    return this.menuRepository.findOneBy({id : menuId.id})
  }

  async getAllMenuByRestaurant(resId: RestaurantId){
    try{
      const menu = await this.menuRepository.findBy({resId : resId.id})
      return {Menu: menu}
    } catch(err){
      console.log(err)
    }
  }

  async createMenu (createMenuDto: CreateMenuDto)  {
    const currentDate = new Date()

    let newMenu = this.menuRepository.create({
      ...createMenuDto,
      createAt: currentDate,
      updateAt: currentDate,
    })
    const createdMenu = await this.menuRepository.save(newMenu)

    return this.menuRepository.findOneBy({ id : createdMenu.id })
  }

  async updateMenu(updateMenuDto: UpdateMenuDto) {
    const updateAt = new Date()
    const { id , ...updateField } = updateMenuDto
    const updateMenu = await this.menuRepository.update({ id },{
       ...updateField,
       updateAt
      })
    // console.log(updateMenu)
    return this.menuRepository.findOneBy({ id })
  }

  deleteMenu(menuId: MenuId) {
    this.menuRepository.delete({id : menuId.id})
    return {}
  }

}
