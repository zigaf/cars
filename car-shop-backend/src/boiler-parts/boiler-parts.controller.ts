import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {BoilerPart} from './boiler-part.entity';
import {BoilerPartsService} from './boiler-parts.service';

@Controller('api/boiler-parts')
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

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: Partial<BoilerPart>) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.delete(+id);
  }

  @Post()
  create(@Body() dto: Partial<BoilerPart>) {
    return this.service.create(dto);
  }
}
