import { Test, TestingModule } from '@nestjs/testing';
import { Controller1Controller } from './controller1.controller';
import { Service1Service } from '../service1/service1.service';

describe('Controller1Controller', () => {
  let controller: Controller1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Controller1Controller],
      providers: [Service1Service], 
    }).compile();

    controller = module.get<Controller1Controller>(Controller1Controller);
  });

  it('debería estar definido', () => {
    expect(controller).toBeDefined();
  });
});