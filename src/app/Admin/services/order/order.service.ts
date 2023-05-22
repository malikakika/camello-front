import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.backendUrl + '/';

  }
  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  deleteOrder(orderId: number): Observable<void> {
    const url = `${this.apiUrl}/${orderId}`;
    return this.http.delete<void>(url);
  }
}
