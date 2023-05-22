import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {


  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.backendUrl + '/';

  }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  deletePost(postId: number): Observable<void> {
    const url = `${this.apiUrl}/${postId}`;
    return this.http.delete<void>(url);
  }
}
