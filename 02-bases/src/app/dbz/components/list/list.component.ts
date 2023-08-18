import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'app-dbz-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {
    @Input()
    public characterList: Character[] = [
        {
            name: 'Tronks',
            power: 10
        }
    ];

    @Output()
    onDelete: EventEmitter<number> = new EventEmitter();

    onDeleteCharacter(index: number): void {
        console.log('onDeleteCharacter ', index);
        this.onDelete.emit(index);
    }
}
