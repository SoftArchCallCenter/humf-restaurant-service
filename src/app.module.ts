import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestuarantModule } from './restuarant/restuarant.module';

@Module({
  imports: [RestuarantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
