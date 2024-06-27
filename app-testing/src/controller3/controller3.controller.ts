import { Controller, Get } from '@nestjs/common';
import { Service3Service } from '../service3/service3.service';

@Controller('controller3')
export class Controller3Controller {
    constructor(private readonly service3Service: Service3Service) {}

    @Get('lista-jugadores')
    obtenerListaJugadores() {
        return this.service3Service.generarListaJugadores();
    }
}