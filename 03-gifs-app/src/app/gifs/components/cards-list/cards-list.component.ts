import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
	selector: 'app-gifs-components-cards-list',
	templateUrl: './cards-list.component.html',
	styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent {
	@Input()
	public gifs: Gif[] = [];
}
