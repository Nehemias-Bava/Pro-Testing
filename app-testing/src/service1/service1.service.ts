import { Injectable } from '@nestjs/common';

@Injectable()
export class Service1Service {
    obtenerSaludo(): string {
        return 'Hola desde Service1';
    }

    sumarNumeros(a: number, b: number): number {
        return a + b;
    }

    multiplicarNumeros(a: number, b: number): number {
        return a * b;
    }
}