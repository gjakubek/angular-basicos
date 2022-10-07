import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
    private _personajes: Personaje[] = [
        { nombre: 'Krilling', poder: 700 },
        { nombre: 'Goku', poder: 15000 },
        { nombre: 'Vegeta', poder: 7500 },
    ];

    get personajes(): Personaje[] { return [...this._personajes] };

    constructor() {
        console.log('Servicio inicializado');
    };

    agregarNuevoPersonaje(data: Personaje) {
        // console.log(data);
        this._personajes.push(data);
    };
};