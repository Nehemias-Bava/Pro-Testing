import { Test, TestingModule } from '@nestjs/testing';
import { Service1Service } from './service1.service';

describe('Service1Service', () => {
  let service: Service1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Service1Service],
    }).compile();

    service = module.get<Service1Service>(Service1Service);
  });

  it('debería estar definido', () => {
    expect(service).toBeDefined();
  });

  it('debería retornar "Hola desde Service1"', () => {
    expect(service.obtenerSaludo()).toBe('Hola desde Service1');
  });

  it('debería sumar dos números', () => {
    expect(service.sumarNumeros(1, 2)).toBe(3);
  });

  it('debería multiplicar dos números', () => {
    expect(service.multiplicarNumeros(2, 3)).toBe(6);
  });
});