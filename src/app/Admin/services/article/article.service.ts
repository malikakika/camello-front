import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.backendUrl + '/';

  }
  getArticles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  deleteArticle(articleId: number): Observable<void> {
    const url = `${this.apiUrl}/${articleId}`;
    return this.http.delete<void>(url);
  }
}
