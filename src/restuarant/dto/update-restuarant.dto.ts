import { PartialType } from '@nestjs/mapped-types';
import { CreateRestuarantDto } from './create-restuarant.dto';

export class UpdateRestuarantDto extends PartialType(CreateRestuarantDto) {
  id: number;
}
