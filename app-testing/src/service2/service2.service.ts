import { Injectable } from '@nestjs/common';

@Injectable()
export class Service2Service {
    obtenerSaludo(): string {
        return 'Hola desde Service2';
    }

    restarNumeros(a: number, b: number): number {
        return a - b;
    }

    dividirNumeros(a: number, b: number): number {
        if (b === 0) throw new Error('División por cero');
        return a / b;
    }
}