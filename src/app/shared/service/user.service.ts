import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  addUser(data: any): Observable<any> {
    return this.http.post(`${environment.api}/users`, data);
  }

  updateUser(id: number, data: any): Observable<any> {
    return this.http.put(`${environment.api}/users/${id}`, data);
  }

  getUserList(): Observable<any> {
    return this.http.get(`${environment.api}/users`);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${environment.api}/users/${id}`);
  }
}
