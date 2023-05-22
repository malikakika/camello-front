import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { environment } from 'src/app/environments/environment';
import { Router } from '@angular/router';

interface User {
  name: string;
  email: string;
  password?: string;
  token?: string;
  role?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl: string;
  private currentUserKey = 'currentUser';

  constructor(private http: HttpClient, private router: Router) {
    this.apiUrl = environment.backendUrl + '/authentication';
  }

  login(email: string, password: string): Observable<User> {
    const loginUrl = `${this.apiUrl}/login`;
    const data = { email, password };

    return this.http.post(loginUrl, data).pipe(
      tap((response: any) => {
        if (response && response.success) {
          const userType = response.userType;
          const redirectUrl = this.getRedirectUrl(userType);
          if (redirectUrl) {
            this.router.navigateByUrl(redirectUrl);
          }
          // Stocker les informations de l'utilisateur dans le localStorage
          localStorage.setItem(this.currentUserKey, JSON.stringify(response.user));
        }
      }),
      map((response: any) => response.user)
    );
  }

  private getRedirectUrl(userType: string): string | null {
    if (userType === 'admin') {
      return '/admin';
    } else if (userType === 'normal') {
      return '/home';
    }
    return null;
  }

  register(firstname: string, lastname: string, email: string, password: string): Observable<any> {
    const registerUrl = `${this.apiUrl}/register`;
    const data = { firstname, lastname, email, password };

    return this.http.post(registerUrl, data);
  }

  logout(): void {
    localStorage.removeItem(this.currentUserKey);
    this.router.navigateByUrl('/login');
  }
}
