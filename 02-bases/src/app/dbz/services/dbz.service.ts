import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
    providedIn: 'root'
})
export class DbzService {
    public characters: Character[] = [
        {
            id: uuid(),
            name: 'Krilin',
            power: 1000
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 9500
        },
        {
            id: uuid(),
            name: 'vegeta',
            power: 7500
        }
    ];

    // onNewCharacter(character: Character): void {
    //     const newCharacter:Character = {
    //         id: uuid(),
    //         name: character.name,
    //         power: character.power
    //     }
    //     this.characters.push(newCharacter);
    // }

    // onNewCharacter({ name, power }: Character): void {
    //     const newCharacter: Character = {
    //         id: uuid(),
    //         name,
    //         power
    //     }
    //     this.characters.push(newCharacter);
    // }

    addCharacter(character: Character): void {
        const newCharacter: Character = { id: uuid(), ...character };
        this.characters.push(newCharacter);
    }

    deleteCharacterById(id: String) {
        this.characters = this.characters.filter(characters => characters.id !== id);
    }
}
