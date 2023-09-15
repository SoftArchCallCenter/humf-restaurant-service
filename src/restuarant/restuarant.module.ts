import { Module } from '@nestjs/common';
import { RestuarantService } from './restuarant.service';
import { RestuarantController } from './restuarant.controller';

@Module({
  controllers: [RestuarantController],
  providers: [RestuarantService],
})
export class RestuarantModule {}
