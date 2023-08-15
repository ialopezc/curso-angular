import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";


@NgModule({
    declarations: [
        HeroComponent,
        ListComponent,
    ],
    exports: [
        HeroComponent,
        ListComponent,
    ],
    imports: [
        BrowserModule,
    ]
})
export class HeroesModule { }
