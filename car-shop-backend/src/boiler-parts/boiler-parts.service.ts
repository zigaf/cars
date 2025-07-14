import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoilerPart } from './boiler-part.entity';

@Injectable()
export class BoilerPartsService {
  constructor(
    @InjectRepository(BoilerPart)
    private readonly repo: Repository<BoilerPart>,
  ) {}

  findAll(): Promise<BoilerPart[]> {
    return this.repo.find();
  }

  findOne(id: string): Promise<BoilerPart | null> {
    return this.repo.findOne({ where: { id: Number(id) } });
  }
}
