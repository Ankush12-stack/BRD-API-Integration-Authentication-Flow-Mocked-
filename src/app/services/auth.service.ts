import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'https://fakestoreapi.com/auth/login';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    // return this.http.post<any>(this.loginUrl, {
    //   email: username,
    //   password: password
    // }).pipe(
    //   tap(response => {
    //     localStorage.setItem('token', response.token || 'dummy-token');
    //   })
    // );
    // if (username === 'admin' && password === 'admin123') {
    //   const token = 'mock-token-123';
    //   localStorage.setItem('token', token);
    //   return of({ token });
    // }
    // return throwError(() => new Error('Invalid credentials'));

    //Mocked credential validation
    // if (username && password) {

      // Token object (simulating JWT payload)
    //   const token = {
    //     accessToken: 'mock-token-123',
    //     username: username,
    //     password: password,
    //     loginTime: new Date().toISOString()
    //   };

    //   localStorage.setItem('token', JSON.stringify(token));

    //   return of(token);
    // }

    // return throwError(() => new Error('Invalid credentials'));
    // return this.http.post<any>(this.loginUrl, {
    //   email: username,      // ReqRes expects "email"
    //   password: password
    // }).pipe(
    //   tap(response => {

        // Build token object with credentials
    //     const tokenObject = {
    //       accessToken: response.token,
    //       username: username,
    //       password: password,
    //       loginTime: new Date().toISOString()
    //     };

    //     localStorage.setItem('token', JSON.stringify(tokenObject));
    //   })
    // );


    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = {
      username: username,
      password: password
    };

    return this.http.post<any>(this.loginUrl, body, { headers }).pipe(
      tap(res => {
        localStorage.setItem('token', res.token);
      })
    );
  }  

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken() {
    const token = localStorage.getItem('token');
    return token ? JSON.parse(token) : null;
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
