import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private loginUrl = 'https://votre-api.com/auth';
  private registerUrl = 'https://votre-api.com/auth';// Remplacez par l'URL de votre API d'authentification

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.loginUrl}/login`, credentials);
  }

  register(firstname: string, lastname: string, email: string, password: string): Observable<any> {
    const url = `${this.registerUrl}/register`; // Remplacez "register" par l'URL d'inscription de votre API
    const body = { firstname, lastname, email, password };
    return this.http.post(url, body);
  }

}
