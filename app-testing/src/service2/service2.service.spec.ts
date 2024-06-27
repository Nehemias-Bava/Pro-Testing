import { Test, TestingModule } from '@nestjs/testing';
import { Service2Service } from './service2.service';

describe('Service2Service', () => {
  let service: Service2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Service2Service],
    }).compile();

    service = module.get<Service2Service>(Service2Service);
  });

  it('debería estar definido', () => {
    expect(service).toBeDefined();
  });

  it('debería retornar "Hola desde Service2"', () => {
    expect(service.obtenerSaludo()).toBe('Hola desde Service2');
  });

  it('debería restar dos números', () => {
    expect(service.restarNumeros(5, 3)).toBe(2);
  });

  it('debería dividir dos números', () => {
    expect(service.dividirNumeros(6, 2)).toBe(3);
  });

  it('debería lanzar un error al dividir por cero', () => {
    expect(() => service.dividirNumeros(6, 0)).toThrow('División por cero');
  });
});