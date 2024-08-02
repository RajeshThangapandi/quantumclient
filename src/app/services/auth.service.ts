import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080';


  constructor(private http: HttpClient) { }

  registerUser(userDetails: User) {
    console.log(userDetails);
    return this.http.post(`${this.baseUrl}/api/data`, userDetails);
  }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/api/data/${email}`);
  }


}
