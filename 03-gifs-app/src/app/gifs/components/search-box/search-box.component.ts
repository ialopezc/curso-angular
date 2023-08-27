import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-gif-components-search-box',
    // templateUrl: './search-box.component.html',
    template: `
    <h5>Buscar:</h5>
    <input 
        type="text" 
        class="form-control" 
        placeholder="Buscar gifs..." 
        (keyup.enter)="searchTag(txtTagInput.value )"
        #txtTagInput
        >
    `,
    styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
    @ViewChild('txtTagInput')
    public tagInput!: ElementRef<HTMLInputElement>;

    searchTag(newTag: String) {
        console.log({ newTag });
    }
}
