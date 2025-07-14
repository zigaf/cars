import { Test, TestingModule } from '@nestjs/testing';
import { BoilerPartsController } from './boiler-parts.controller';

describe('BoilerPartsController', () => {
  let controller: BoilerPartsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoilerPartsController],
    }).compile();

    controller = module.get<BoilerPartsController>(BoilerPartsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
