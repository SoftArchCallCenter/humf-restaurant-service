import { Injectable } from '@nestjs/common';
import { CreateRestuarantDto } from './dto/create-restuarant.dto';
import { UpdateRestuarantDto } from './dto/update-restuarant.dto';

@Injectable()
export class RestuarantService {
  create(createRestuarantDto: CreateRestuarantDto) {
    return 'This action adds a new restuarant';
  }

  findAll() {
    return `This action returns all restuarant`;
  }

  findOne(id: number) {
    return `This action returns a #${id} restuarant`;
  }

  update(id: number, updateRestuarantDto: UpdateRestuarantDto) {
    return `This action updates a #${id} restuarant`;
  }

  remove(id: number) {
    return `This action removes a #${id} restuarant`;
  }
}
