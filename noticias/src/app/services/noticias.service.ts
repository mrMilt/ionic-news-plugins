import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getNews(category) {
    return this.http.get('https://newsapi.org/v2/top-headlines?category='+ category + '&country=us&apiKey=' + environment.apiKey);
  }
}
