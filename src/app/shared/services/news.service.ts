import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private rssUrl = 'https://www.3dnatives.com/es/feed/';

  constructor(private http: HttpClient) {}

  getNews(): Observable<any> {
    return this.http.get(this.rssUrl, { responseType: 'text' }).pipe(
      map(response => {
        // Aquí puedes parsear el XML del feed RSS
        const parser = new DOMParser();
        const xml = parser.parseFromString(response, 'application/xml');
        const items = xml.querySelectorAll('item');
        const news : any[] = [];
        items.forEach(item => {
          news.push({
            title: item.querySelector('title')?.textContent,
            link: item.querySelector('link')?.textContent,
            description: item.querySelector('description')?.textContent,
          });
        });
        return news;
      })
    );
  }
}
