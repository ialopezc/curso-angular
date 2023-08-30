import { Injectable } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

// const GIPHY_API_KEY0 = 'rYWRukI5X7TlevoGXFbTO63EEGpYaX5k';

@Injectable({
	providedIn: 'root'
})
export class GifsService {
	public gifList: Gif[] = [];

	private _tagHistory: string[] = [];
	private apiKey: string = 'rYWRukI5X7TlevoGXFbTO63EEGpYaX5k';
	private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

	constructor(private http: HttpClient) { }

	get tagHistory() {
		return [...this._tagHistory];
	}

	private organizeHistory(tag: string) {
		tag = tag.toLowerCase();

		if (this._tagHistory.includes(tag)) {
			this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !== tag);
		}

		this._tagHistory.unshift(tag);

		this._tagHistory = this._tagHistory.splice(0, 10);
		this.saveLocalStorage();
	}

	private saveLocalStorage(): void {
		localStorage.setItem('History', JSON.stringify(this._tagHistory))
	}

	public searchTag(tag: string): void {
		if (tag.length === 0) return;
		this.organizeHistory(tag);

		const params = new HttpParams()
			.set('api_key', this.apiKey)
			.set('limit', 10)
			.set('q', tag);

		this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
			.subscribe(resp => {
				console.log(resp);
				this.gifList = resp.data;
				console.log({ gifs: this.gifList });
			});





		// fetch('https://api.giphy.com/v1/gifs/search?api_key=rYWRukI5X7TlevoGXFbTO63EEGpYaX5k&q=valorant&limit=10')
		// 	.then(resp => resp.json())
		// 	.then(data => console.log(data));

		// const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=rYWRukI5X7TlevoGXFbTO63EEGpYaX5k&q=valorant&limit=10');
		// const data = await resp.json();
		// console.log(data);


	}
}
