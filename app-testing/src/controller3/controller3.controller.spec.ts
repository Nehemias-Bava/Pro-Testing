import { Test, TestingModule } from '@nestjs/testing';
import { Controller3Controller } from './controller3.controller';
import { Service3Service } from '../service3/service3.service';

describe('Controller3Controller', () => {
  let controller: Controller3Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Controller3Controller],
      providers: [Service3Service], 
    }).compile();

    controller = module.get<Controller3Controller>(Controller3Controller);
  });

  it('debería estar definido', () => {
    expect(controller).toBeDefined();
  });
});