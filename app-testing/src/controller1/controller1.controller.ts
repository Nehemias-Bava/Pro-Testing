import { Controller, Get, Query } from '@nestjs/common';
import { Service1Service } from '../service1/service1.service';

@Controller('controller1')
export class Controller1Controller {
    constructor(private readonly service1Service: Service1Service) {}

    @Get('saludo')
    obtenerSaludo(): string {
        return this.service1Service.obtenerSaludo();
    }

    @Get('sumar')
    sumarNumeros(@Query('a') a: string, @Query('b') b: string): number {
        return this.service1Service.sumarNumeros(Number(a), Number(b));
    }

    @Get('multiplicar')
    multiplicarNumeros(@Query('a') a: string, @Query('b') b: string): number {
        return this.service1Service.multiplicarNumeros(Number(a), Number(b));
    }
}