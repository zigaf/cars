import { Test, TestingModule } from '@nestjs/testing';
import { BoilerPartsService } from './boiler-parts.service';

describe('BoilerPartsService', () => {
  let service: BoilerPartsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoilerPartsService],
    }).compile();

    service = module.get<BoilerPartsService>(BoilerPartsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
