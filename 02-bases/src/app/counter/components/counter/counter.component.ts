// import { CounterComponent } from './counter.component';
// import { Component } from "@angular/core";

// @Component({
//     selector: 'app-counter',
//     template: '<h1>Hola Counter</h1>',
// })
// export class CounterComponent { }




import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <p>{{ counter }}</p>

    <button (click)="incrementarValor(+1)">+1</button>
    <button (click)="valorDefault()">Reset</button>
    <button (click)="incrementarValor(-1)">-1</button>
    `
})

export class CounterComponent {
    constructor() { }

    public counter: number = 10;

    incrementarValor(value: number): void {
        this.counter += value;
    }

    valorDefault(): void {
        this.counter = 10;
    }
}
