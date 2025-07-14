import { Controller, Get, Param } from '@nestjs/common';
import { BoilerPartsService } from './boiler-parts.service';

@Controller('api/boiler-parts') // <<<<<< именно так!
export class BoilerPartsController {
  constructor(private readonly service: BoilerPartsService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }
}
