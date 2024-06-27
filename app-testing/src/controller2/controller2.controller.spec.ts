import { Test, TestingModule } from '@nestjs/testing';
import { Controller2Controller } from './controller2.controller';
import { Service2Service } from '../service2/service2.service';

describe('Controller2Controller', () => {
  let controller: Controller2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Controller2Controller],
      providers: [Service2Service], 
    }).compile();

    controller = module.get<Controller2Controller>(Controller2Controller);
  });

  it('debería estar definido', () => {
    expect(controller).toBeDefined();
  });
});