import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public title: string = 'Hola Mundo';
    public counter: number = 10;

    incrementarValor(value: number): void {
        this.counter += value;
    }

    valorDefault(): void {
        this.counter = 10;
    }
}
