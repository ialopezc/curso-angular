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
            id: '',
            name: 'Tronks',
            power: 10
        }
    ];

    @Output()
    onDelete: EventEmitter<String> = new EventEmitter();

    onDeleteCharacter(id?: String): void {
        if (!id) return;
        // console.log('onDeleteCharacter ', id);
        this.onDelete.emit(id);
    }
}
