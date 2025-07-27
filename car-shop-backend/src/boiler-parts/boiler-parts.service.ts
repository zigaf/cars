import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoilerPart } from './boiler-part.entity';

@Injectable()
export class BoilerPartsService {
  constructor(
    @InjectRepository(BoilerPart)
    private readonly boilerPartsRepo: Repository<BoilerPart>,
  ) {}

  findAll() {
    return this.boilerPartsRepo.find();
  }

  findOne(id: string) {
    return this.boilerPartsRepo.findOneBy({ id: +id });
  }

  async update(id: number, dto: Partial<BoilerPart>) {
    const part = await this.boilerPartsRepo.findOneBy({ id });
    if (!part) throw new NotFoundException('Part not found');

    const updated = Object.assign(part, dto);
    return this.boilerPartsRepo.save(updated);
  }

  async delete(id: number) {
    const result = await this.boilerPartsRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Part not found');
    }
    return { message: 'Deleted successfully' };
  }
  async create(dto: Partial<BoilerPart>) {
    const newPart = this.boilerPartsRepo.create(dto);
    return this.boilerPartsRepo.save(newPart);
  }
}
