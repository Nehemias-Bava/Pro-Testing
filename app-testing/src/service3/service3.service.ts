import { Injectable } from '@nestjs/common';

@Injectable()
export class Service3Service {
    public jugadoresArgentina = [
        { nombre: 'Lionel', apellido: 'Messi' },
        { nombre: 'Ángel', apellido: 'Di María' },
        { nombre: 'Sergio', apellido: 'Agüero' },
        { nombre: 'Paulo', apellido: 'Dybala' },
        { nombre: 'Rodrigo', apellido: 'De Paul' },
        { nombre: 'Emiliano', apellido: 'Martínez' },
        { nombre: 'Leandro', apellido: 'Paredes' },
        { nombre: 'Nicolás', apellido: 'Otamendi' },
        { nombre: 'Lautaro', apellido: 'Martínez' },
        { nombre: 'Gonzalo', apellido: 'Montiel' },
    ];

    public jugadoresMundo = [
        { nombre: 'Cristiano', apellido: 'Ronaldo' },
    { nombre: 'Neymar', apellido: 'Júnior' },
    { nombre: 'Kylian', apellido: 'Mbappé' },
    { nombre: 'Kevin', apellido: 'De Bruyne' },
    { nombre: 'Robert', apellido: 'Lewandowski' },
    { nombre: 'Luka', apellido: 'Modric' },
    { nombre: 'Virgil', apellido: 'van Dijk' },
    { nombre: 'Mohamed', apellido: 'Salah' },
    { nombre: 'Erling', apellido: 'Haaland' },
    { nombre: 'Harry', apellido: 'Kane' },
    ];

    generarListaJugadores(): { numero: number, nombre: string, apellido: string }[] {
        const lista: { numero: number, nombre: string, apellido: string }[] = [];
        for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            const jugador = this.jugadoresArgentina[i % this.jugadoresArgentina.length];
            lista.push({ numero: i, nombre: jugador.nombre, apellido: jugador.apellido });
        } else {
            const jugador = this.jugadoresMundo[i % this.jugadoresMundo.length];
            lista.push({ numero: i, nombre: jugador.nombre, apellido: jugador.apellido });
        }
        }
        return lista;
    }
}