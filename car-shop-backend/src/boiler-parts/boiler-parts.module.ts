import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoilerPart } from './boiler-part.entity';
import { BoilerPartsService } from './boiler-parts.service';
import { BoilerPartsController } from './boiler-parts.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BoilerPart])],
  providers: [BoilerPartsService],
  controllers: [BoilerPartsController],
})
export class BoilerPartsModule {}
