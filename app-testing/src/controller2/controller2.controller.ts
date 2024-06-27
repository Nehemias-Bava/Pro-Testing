import { Controller, Get, Query } from '@nestjs/common';
import { Service2Service } from '../service2/service2.service';

@Controller('controller2')
export class Controller2Controller {
    constructor(private readonly service2Service: Service2Service) {}

    @Get('saludo')
    obtenerSaludo(): string {
        return this.service2Service.obtenerSaludo();
    }

    @Get('restar')
    restarNumeros(@Query('a') a: string, @Query('b') b: string): number {
        return this.service2Service.restarNumeros(Number(a), Number(b));
    }

    @Get('dividir')
    dividirNumeros(@Query('a') a: string, @Query('b') b: string): number {
        return this.service2Service.dividirNumeros(Number(a), Number(b));
    }
}