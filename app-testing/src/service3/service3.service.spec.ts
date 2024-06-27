import { Test, TestingModule } from '@nestjs/testing';
import { Service3Service } from './service3.service';

describe('Service3Service', () => {
  let service: Service3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Service3Service],
    }).compile();

    service = module.get<Service3Service>(Service3Service);
  });

  it('debería estar definido', () => {
    expect(service).toBeDefined();
  });

  it('debería generar una lista de 100 elementos', () => {
    const lista = service.generarListaJugadores();
    expect(lista).toHaveLength(100);
  });

  it('debería alternar entre jugadores argentinos y jugadores del mundo', () => {
    const lista = service.generarListaJugadores();
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].numero % 2 === 0) {
        expect(service.jugadoresArgentina).toContainEqual({
          nombre: lista[i].nombre,
          apellido: lista[i].apellido,
        });
      } else {
        expect(service.jugadoresMundo).toContainEqual({
          nombre: lista[i].nombre,
          apellido: lista[i].apellido,
        });
      }
    }
  });
});