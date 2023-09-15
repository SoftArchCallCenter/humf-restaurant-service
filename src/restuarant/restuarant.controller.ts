import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RestuarantService } from './restuarant.service';
import { CreateRestuarantDto } from './dto/create-restuarant.dto';
import { UpdateRestuarantDto } from './dto/update-restuarant.dto';

@Controller()
export class RestuarantController {
  constructor(private readonly restuarantService: RestuarantService) {}

  @MessagePattern('createRestuarant')
  create(@Payload() createRestuarantDto: CreateRestuarantDto) {
    return this.restuarantService.create(createRestuarantDto);
  }

  @MessagePattern('findAllRestuarant')
  findAll() {
    return this.restuarantService.findAll();
  }

  @MessagePattern('findOneRestuarant')
  findOne(@Payload() id: number) {
    return this.restuarantService.findOne(id);
  }

  @MessagePattern('updateRestuarant')
  update(@Payload() updateRestuarantDto: UpdateRestuarantDto) {
    return this.restuarantService.update(updateRestuarantDto.id, updateRestuarantDto);
  }

  @MessagePattern('removeRestuarant')
  remove(@Payload() id: number) {
    return this.restuarantService.remove(id);
  }
}
